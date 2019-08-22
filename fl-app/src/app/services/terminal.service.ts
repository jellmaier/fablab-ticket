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
  }

  private deleteTerminalToken():void {
    this.cookieService.delete(this.cookieName, this.cookiePath);
  }

  public hasTerminalToken():boolean {
    return this.cookieService.check(this.cookieName);
  }

  // ------------ Ticket System Online --------

  public setTicketSystemOnline(online:boolean): Observable<boolean> {
    return this.httpService.setTicketSystemOnline(online);
  }



}


