import { Component, OnDestroy, OnInit } from '@angular/core';


import { AppApiService } from '../../services/app-api.service';
import { TerminalService } from '../../services/terminal.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  private toggleTerminal: boolean = false;
  private isToggleTicketSystemOnline: boolean = false;


  // private toggle_subscription: Subscription;

  constructor(private appApiService: AppApiService,
              private terminalSercie: TerminalService) { }

  ngOnInit():void {
    this.initData();
  }


  private initData():void {
    this.appApiService.isApiDataLoaded()
    .subscribe((isDataLoaded) => {
      if (isDataLoaded === true) {
        this.toggleTerminal = this.appApiService.isTerminal();
        this.isToggleTicketSystemOnline = this.appApiService.isTicketSystemOnline();
      }
    });
  }
/*
  private loadToggleSubscription():void {
    this.toggle_subscription = this.appApiService.getTerminalObservable()
    .subscribe((isTerminal) => {
      //console.log('toggle: ' + isTerminal);
      this.toggleTerminal = isTerminal;
      if(this.count >= 5) {
        //this.toggle_subscription.unsubscribe();
      }
      this.count ++;
    })
  }
*/

  ngOnDestroy(): void {
    //this.toggle_subscription.unsubscribe();
  }

  private toggleIsTerminal(): void {
    //this.appApiService.toggleTerminal();
    this.toggleTerminal = !this.toggleTerminal;
    this.terminalSercie.makeTerminal(this.toggleTerminal);
    //console.log(this.toggleTerminal);

  }

  private toggleTicketSystemOnline(): void {
    this.isToggleTicketSystemOnline = !this.isToggleTicketSystemOnline;
    this.terminalSercie.setTicketSystemOnline(this.isToggleTicketSystemOnline).subscribe(
      data =>  {
        this.isToggleTicketSystemOnline = data;
      }
    );


  }

}
