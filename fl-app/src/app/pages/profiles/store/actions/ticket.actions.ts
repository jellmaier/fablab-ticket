import { Action } from '@ngrx/store';
import { Ticket, TicketList } from '../../my-tickets/my-tickets.component';
import { Link } from '../../../../services/link.service';



export const INIT_TICKET: string      = '[TICKET] Init';
export const TICKETS_LOADED: string   = '[TICKET] Tickets loaded';
export const ADD_TICKET: string       = '[TICKET] Add';
export const REMOVE_TICKET: string    = '[TICKET] Remove';


export class InitTicket implements Action {
  readonly type: string = INIT_TICKET;

  constructor(public payload: Link) {}
}

export class TicketsLoaded implements Action {
  readonly type: string = TICKETS_LOADED;

  constructor(public payload: TicketList) {}
}

export class AddTicket implements Action {
  readonly type: string = ADD_TICKET;

  constructor(public payload: Ticket) {}
}

export class RemoveTicket implements Action {
  readonly type: string = REMOVE_TICKET;

  constructor(public payload: number) {}
}


export type Actions = InitTicket | TicketsLoaded | AddTicket | RemoveTicket;
