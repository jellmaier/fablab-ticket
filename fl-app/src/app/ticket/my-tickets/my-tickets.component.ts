import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

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
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit {

  private hash: string = '';
  private tickets: Array<Ticket>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets():void {
    this.httpService.getMyTickets(this.hash).subscribe(
      data =>  {
        console.log(data);
        this.tickets = data.tickets;
        this.tickets.forEach( ticket => {
          this.httpService.getMyTicketDetails(ticket.ID).subscribe(
            ticketData =>  {
              console.log(ticketData);
              //ticket.device_title = ticketData.device_title;
              //ticket.pin = ticketData.pin;
              //ticket.color = ticketData.color;
              Object.assign(ticket, ticketData);


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
