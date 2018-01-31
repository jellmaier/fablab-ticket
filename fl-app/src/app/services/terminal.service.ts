import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { HttpService } from './http.service';
import { AppApiService, AppConnect } from './app-api.service';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class TerminalService {

  constructor(private appApiService: AppApiService,
              private httpService: HttpService,
              private cookieService: CookieService) {
    //this.setTerminalToken();
    this.loadTerminalToken();
  }

 
  public setTerminalToken():void {
    this.httpService.getTerminalToken().subscribe(
      data =>  {
        this.cookieService.set( 'terminal_token', data, 180 );
      }
    );
  }

  public deleteTerminalToken():void {
    this.cookieService.delete('terminal_token');
  }
  
  public loadTerminalToken():void {
    this.checkTerminalToken().subscribe(
      data =>  {
        this.appApiService.setAppConnect(data);
      });
  }

  public hasTerminalToken():boolean {
    return this.cookieService.check('terminal_token');
  }

  public checkTerminalToken(): Observable<AppConnect>{
    let cookie_value = this.cookieService.get('terminal_token');
    return this.httpService.checkTerminalToken(cookie_value);
  }



}


