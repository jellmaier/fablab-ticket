import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { HttpService } from './http.service';

import { Observable }     from 'rxjs/Observable';



@Injectable()
export class TerminalService {

  private cookie_name:string = 'terminal_token';
  private cookie_days:number = 180;
  private cookie_path:string = '/';

  constructor(private httpService: HttpService,
              private cookieService: CookieService) {
    //this.setTerminalToken();
    //this.loadTerminalToken();
    //console.log('has token: ' + this.hasTerminalToken());
  }

  public makeTerminal(make:boolean):void {

    if (make == true) {
      this.setTerminalToken();
    } else {
      this.deleteTerminalToken();
    }
  }

 
  private setTerminalToken():void {
    this.httpService.getTerminalToken().subscribe(
      data =>  {
        this.cookieService.set( this.cookie_name , data, this.cookie_days, this.cookie_path);
      }
    );
  }

  private deleteTerminalToken():void {
    this.cookieService.delete(this.cookie_name, this.cookie_path);
  }
  /*
  public loadTerminalToken():void {
    this.checkTerminalToken().subscribe(
      data =>  {
        this.appApiService.setAppConnect(data);
      });
  }
*/
  public hasTerminalToken():boolean {
    return this.cookieService.check(this.cookie_name);
  }
/*
  public checkTerminalToken(): Observable<AppConnect>{
    let cookie_value = this.cookieService.get('terminal_token');
    return this.httpService.checkTerminalToken(cookie_value);
  }
*/

  // ------------ Ticket System Online --------

  public setTicketSystemOnline(online:boolean): Observable<boolean> {
    return this.httpService.setTicketSystemOnline(online);
  }



}


