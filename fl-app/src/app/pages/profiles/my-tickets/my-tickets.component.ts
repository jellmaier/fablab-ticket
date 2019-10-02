import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Link } from '../../../services/link.service';
import { BasicResource } from '../../../services/http.service';

export interface TicketList {
  tickets: Array<Ticket>;
  hash: string;
}

export interface Ticket extends BasicResource {
  ID: number;
  post_date: string;
  post_title: string;
  status: string;
  device_title?:string;
  pin?: string;
  color?: string;
  available?: boolean;
  changed?: boolean;
}

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTicketsComponent implements OnInit {

  @Input()
  tickets: Array<Ticket>;

  @Output() buttonClick: EventEmitter<Link> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
