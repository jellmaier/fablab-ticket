import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../my-tickets/my-tickets.component';
import { Link } from '../../services/link.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket: Ticket;

  @Output() buttonClick: EventEmitter<Link> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(clicked: boolean, link: Link): void {
    if ( clicked ) {
      this.buttonClick.emit(link);
    }
  }

}
