import { Injectable } from '@angular/core';
import { BasicResource, HttpService } from '../../../../services/http.service';
import { mergeMap, switchMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProfileActions from '../actions/profile.actions';
import * as TicketActions from '../actions/ticket.actions';
import * as DeviceActions from '../actions/device.actions';
import { Router } from '@angular/router';
import { LinkService } from '../../../../services/link.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';


@Injectable()
export class ProfileEffects {

  loadProfile$: any = createEffect(() =>
    this.actions$.pipe(
      ofType<ProfileActions.Actions>(ProfileActions.PROFILE_REDIRECT),
      mergeMap(() => this.httpService.getCurrentResource<BasicResource>()
        .pipe(
          tap((resource: BasicResource)  =>
            this.router.navigate(['/' + this.linkService.getHrefByReltype(resource._links, 'related')]))
        )
      )
    ),
    { dispatch: false }
  );

  initProfile$:  Observable<Action> = createEffect(() =>
      this.actions$.pipe(
        ofType<ProfileActions.Actions>(ProfileActions.PROFILE_INIT),
        mergeMap(() => this.httpService.getCurrentResource<BasicResource>()
          .pipe(
            switchMap((resource: BasicResource) =>
             [{ type: DeviceActions.INIT_DEVICE, payload: this.linkService.getLinkByReltype(resource._links, 'devices') },
              { type: TicketActions.INIT_TICKET, payload: this.linkService.getLinkByReltype(resource._links, 'tickets') },
              { type: ProfileActions.PROFILE_LOADED, payload: resource }])
          )
        )
      )
  );

  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    private linkService: LinkService,
    private router: Router
  ) {}
}
