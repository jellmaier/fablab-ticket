import { Injectable } from '@angular/core';
import { BasicResource, HttpService } from '../../../../services/http.service';
import { map, mergeMap, tap } from 'rxjs/operators';
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
           /* concatMapTo((response: BasicResource) => [
              new TicketActions.InitTicket(this.linkService.getLinkByReltype(response._links, 'tickets')),
              new DeviceActions.InitDevice(this.linkService.getLinkByReltype(response._links, 'devices'))
            ])*/
           // map((resource: BasicResource) =>
            // ({ type: DeviceActions.DEVICES_LOADED, payload: this.linkService.getHrefByReltype(resource._links, 'devices') })),
           // map((resource: BasicResource) =>
            //  ({ type: TicketActions.INIT_TICKET, payload: this.linkService.getLinkByReltype(resource._links, 'tickets') }))
            map((resource: BasicResource) =>
              ({ type: ProfileActions.PROFILE_LOADED, payload: resource }))
          )
        )
      )
  );

  loadedProfile$:  Observable<Action> = createEffect(() =>
      this.actions$.pipe(
        ofType<ProfileActions.Actions>(ProfileActions.PROFILE_LOADED),
        map((action) =>
          ({ type: (TicketActions.INIT_TICKET), payload: this.linkService.getLinkByReltype(action.payload._links, 'tickets') }))
      )
  );

  loaded2Profile$:  Observable<Action> = createEffect(() =>
      this.actions$.pipe(
        ofType<ProfileActions.Actions>(ProfileActions.PROFILE_LOADED),
        map((action) =>
          ({ type: DeviceActions.INIT_DEVICE, payload: this.linkService.getLinkByReltype(action.payload._links, 'devices') }))
      )
  );


  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    private linkService: LinkService,
    private router: Router
  ) {}
}
