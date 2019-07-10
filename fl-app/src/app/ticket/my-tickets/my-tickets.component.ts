import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface TicketList {
  tickets: Array<Ticket>;
  hash: string;
}

export interface Ticket {
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

export interface TicketData {
  device_title:string;
  available: boolean;
  color: string;
  device_id: number;
  pin: string;
  status: string;
}



@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTicketsComponent implements OnInit {

  @Input()
  tickets$: Observable<TicketList>;

  constructor() { }

  ngOnInit(): void {
  }
}
