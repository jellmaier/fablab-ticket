import { Injectable } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TicketActions from '../actions/ticket.actions';
import { TicketList } from '../../my-tickets/my-tickets.component';


@Injectable()
export class TicketEffects {

  loadTickets$: any = createEffect(() => this.ticketActions$.pipe(
    ofType<TicketActions.InitTicket>(TicketActions.INIT_TICKET),
    mergeMap((action) => this.httpService.requestByLink<TicketList>(action.payload)
      .pipe(
        map((ticketList: TicketList) => ({ type: TicketActions.TICKETS_LOADED, payload: ticketList }))
      ))
    )
  );

  constructor(
    private ticketActions$: Actions,
    private httpService: HttpService
  ) {}
}
