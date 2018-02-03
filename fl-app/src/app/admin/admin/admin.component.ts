import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { Subscription }     from 'rxjs/Subscription';


import { AppApiService } from './../../services/app-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private toggle_terminal:boolean = false;
  private toggle_ticket_system_online:boolean = false;
  private toggle_subscription: Subscription;

  private take_until:boolean = false;

  private count:number = 0;


  constructor(private appApiService: AppApiService) { }

  ngOnInit() {
    this.toggle_subscription = this.appApiService.getTerminalObservable()
    .subscribe((isTerminal) => { 
      //console.log('toggle: ' + isTerminal);
      this.toggle_terminal = isTerminal;
      /*if(this.count >= 5) {
        this.toggle_subscription.unsubscribe();
      }
      this.count ++;
      */
    })
  }

  ngOnDestroy() {
    this.toggle_subscription.unsubscribe();
  }

  private toggleIsTerminal() {
    this.appApiService.toggleTerminal();
    //this.appApiService.toggleTerminal();
    //this.toggle_terminal = !this.toggle_terminal;
    //console.log(this.toggleTerminal);

  }

  private toggleTicketSystemOnline() {
    this.toggle_ticket_system_online = !this.toggle_ticket_system_online;
    //console.log(this.toggleTerminal);

  }

}
