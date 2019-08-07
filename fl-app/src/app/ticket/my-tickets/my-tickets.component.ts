import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Link, Links } from '../../services/link.service';

export interface TicketList {
  tickets: Array<Ticket>;
  hash: string;
}

export interface DeviceList extends Array<Device>{}


export interface Device {
  id: number;
  name: string;
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
  links: Links;
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

  @Output() buttonClick: EventEmitter<Link> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
