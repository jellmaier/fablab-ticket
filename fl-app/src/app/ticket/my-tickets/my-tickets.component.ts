import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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

  private hash: string = '';
  private tickets: Array<Ticket>;
  tickets$: Observable<TicketList>;

  constructor(private httpService: HttpService,
              private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
   // this.loadTickets();
    this.loadTicketsAsync();
  }

  loadTicketsAsync():void {
    this.tickets$ = this.httpService.getMyTicketsV2(this.hash);
  }

  loadTickets():void {
    this.httpService.getMyTickets(this.hash).subscribe(
      data =>  {
        console.log(data);
        this.tickets = data.tickets;
        this.ref.markForCheck();
        this.tickets.forEach( ticket => {
          this.httpService.getMyTicketDetails(ticket.ID).subscribe(
            ticketData =>  {
              console.log(ticketData);
              Object.assign(ticket, ticketData);
              this.ref.markForCheck();
            },
            err =>  {
              console.log(err.error.message);
            }
          );
        });
      },
      err =>  {
        console.log(err.error.message);
      }
    );
  }

}
