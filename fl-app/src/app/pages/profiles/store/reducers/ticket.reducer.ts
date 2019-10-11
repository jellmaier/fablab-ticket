import * as TicketActions from '../actions/ticket.actions';
import { TicketList } from '../../my-tickets/my-tickets.component';


export function ticketReducer(state: TicketList, action: TicketActions.Actions): TicketList {

  switch (action.type) {
    case TicketActions.INIT_TICKET:
      return state;

    case TicketActions.TICKETS_LOADED:
      return action.payload as TicketList;

    case TicketActions.ADD_TICKET:
     // return [...state, tickets: action.payload as Ticket];#
      return state;

    case TicketActions.REMOVE_TICKET:
      state.tickets.splice(action.payload as number, 1);
      return state;

    default:
      return state;
  }
}
