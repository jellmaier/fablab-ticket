import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';



@Injectable()
export class TerminalService {

  private cookieName: string = 'terminal_token';
  private cookieDays: number = 180;
  private cookiePath: string = '/';

  constructor(private httpService: HttpService,
              private cookieService: CookieService) {
    //this.setTerminalToken();
    //this.loadTerminalToken();
    //console.log('has token: ' + this.hasTerminalToken());
  }

  public makeTerminal(make:boolean):void {

    if (make === true) {
      this.setTerminalToken();
    } else {
      this.deleteTerminalToken();
    }
  }

 
  private setTerminalToken():void {
    this.httpService.getTerminalToken().subscribe(
      data =>  {
        this.cookieService.set( this.cookieName , data, this.cookieDays, this.cookiePath);
      }
    );

    this.httpService.getDevices().subscribe(
      data =>  {
        console.log(data);
      }
    );

    this.httpService.gettesturl().subscribe(
      data =>  {
        console.log(data);
      }
    );
  }

  private deleteTerminalToken():void {
    this.cookieService.delete(this.cookieName, this.cookiePath);
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
    return this.cookieService.check(this.cookieName);
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


