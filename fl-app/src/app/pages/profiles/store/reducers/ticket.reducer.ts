import * as TicketActions from '../actions/ticket.actions';
import { Ticket } from '../../my-tickets/my-tickets.component';


export function ticketReducer(state: Ticket[], action: TicketActions.Actions): Ticket[] {

  switch (action.type) {
    case TicketActions.INIT_TICKET:
      return state;

    case TicketActions.TICKETS_LOADED:
      return action.payload as Ticket[];

    case TicketActions.ADD_TICKET:
      return [...state, action.payload as Ticket];

    case TicketActions.REMOVE_TICKET:
      state.splice(action.payload as number, 1);
      return state;

    default:
      return state;
  }
}
