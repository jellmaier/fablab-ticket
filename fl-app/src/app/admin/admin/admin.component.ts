import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { Subscription }     from 'rxjs/Subscription';


import { AppApiService } from './../../services/app-api.service';
import { TerminalService } from './../../services/terminal.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private toggle_terminal:boolean = false;
  private toggle_ticket_system_online:boolean = false;
  //private toggle_subscription: Subscription;




  constructor(private appApiService: AppApiService,
              private terminalSercie: TerminalService) { }

  ngOnInit() {
    this.initData();
  }


  private initData():void {
    this.appApiService.isApiDataLoaded()
    .subscribe((isDataLoaded) => { 
      if(isDataLoaded == true) {
        this.toggle_terminal = this.appApiService.isTerminal();
        this.toggle_ticket_system_online = this.appApiService.isTicketSystemOnline();
      }
    })
  }
/*
  private loadToggleSubscription():void {
    this.toggle_subscription = this.appApiService.getTerminalObservable()
    .subscribe((isTerminal) => { 
      //console.log('toggle: ' + isTerminal);
      this.toggle_terminal = isTerminal;
      if(this.count >= 5) {
        //this.toggle_subscription.unsubscribe();
      }
      this.count ++;
      
    })
  }

*/
  ngOnDestroy() {
    //this.toggle_subscription.unsubscribe();
  }

  private toggleIsTerminal() {
    //this.appApiService.toggleTerminal();
    this.toggle_terminal = !this.toggle_terminal;
    this.terminalSercie.makeTerminal(this.toggle_terminal);
    //console.log(this.toggleTerminal);

  }

  private toggleTicketSystemOnline() {
    this.toggle_ticket_system_online = !this.toggle_ticket_system_online;
    this.terminalSercie.setTicketSystemOnline(this.toggle_ticket_system_online).subscribe(
      data =>  {
        this.toggle_ticket_system_online = data;
      }
    );


  }

}
