import { Observable, throwError as observableThrowError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppApiService, UserData } from './app-api.service';

import { CookieService } from 'ngx-cookie-service';

import { DeviceStatistics } from 'app/pages/statistic/statistic.service';
import { UserRegister } from '../pages/login/register/register.component';
import { Ticket, TicketData, TicketList } from '../ticket/my-tickets/my-tickets.component';
import { Router } from '@angular/router';
import { Link } from './link.service';


//import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  
  constructor( private http: HttpClient,
               private router: Router,
               private appApiService: AppApiService,
               private cookieService: CookieService ) {}



  //--------  ticket system online  -----------------------

/*  public checkTicketSystemOnline(): Observable<any> {

    let url = this.appApiService.getPluginApiUrl() + 'check_user_login';

    return this.http.get<any>(url, {
        params: { username: 'login'}
      });

  }
*/
  public setTicketSystemOnline(online:boolean): Observable<boolean> {

    const url: string = this.appApiService.getPluginApiUrl() + 'ticket_system_online';
    const param: string = online ? 'online' : 'offline' ;

    return this.http.post<boolean>(url, {
        params: { set_online: param }
      }).pipe(catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));
  }


  //--------  terminal_token  -----------------------
  
/*  public checkTerminalToken(terminal_token: string): Observable<any> {
    let url = this.appApiService.getPluginApiUrl() + 'check_terminal_token';
    return this.http.get<any>(url, {
        params: { token: terminal_token }
      })
          .catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));
  } */
  
  public getTerminalToken(): Observable<any> {
    const url: string = this.appApiService.getPluginApiUrl() + 'get_terminal_token';

    return this.http.get<any>(url).pipe(
          catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));
  }

  public getDevices(): Observable<any> {
    const url: string = this.appApiService.getPluginApiUrl() + 'device_types';

    return this.http.get<any>(url).pipe(
          catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));
  }

  public getMyTickets(hash: string): Observable<TicketList> {
    const url: string = this.appApiService.getPluginApiUrl() + 'tickets_current_user';

    return this.http.get<any>(url, {
        params: { hash }
      }).pipe(
          catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));
  }

  public getMyTicketsV2(hash: string): Observable<TicketList> {
    const url: string = this.appApiService.getRestBaseUrl() + 'myTickets';

    return this.http.get<any>(url, {
        params: { hash }
      }).pipe(
          catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));
  }

  public getMyTicketDetails(id: number): Observable<TicketData> {
    const url: string = this.appApiService.getPluginApiUrl() + 'ticket_values/' + id;

    return this.http.get<any>(url).pipe(
          catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));
  }

  public gettesturl(): Observable<any> {
    const url: string = 'https://httpbin.org/get';

    return this.http.get<any>(url).pipe(
          catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));
  }

  // --- HATEOAS Methods ------------------------

  public getResourceByHref(href: string): Observable<any> {
    const url: string = this.appApiService.getRestBaseUrl() + '/' + href;
    return this.http.get<any>(url).pipe(
      catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));
  }

  public requestByLink(link: Link): Observable<any> {
    const url: string = this.appApiService.getRestBaseUrl() + '/' + link.href;

    return this.http.request<any>(link.type, url).pipe(
      catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));
  }

  public getCurrentResource(): Observable<any> {
    console.log(this.appApiService.getRestBaseUrl() + this.router.url);
    const url: string = this.appApiService.getRestBaseUrl() + this.router.url;
    return this.http.get<any>(url).pipe(
      catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));
  }


  // -------  Register Methods  ------------------------

  public registerUser(registerData: UserRegister): Observable<any> {

    const url: string = this.appApiService.getPluginApiUrl() + 'register_user_on_terminal';

    const terminalToken:string = this.cookieService.get('terminal_token'); // should be in terminal service

    return this.http.post<any>(url, {
        params: { username: registerData.username,
                  name: registerData.name,
                  surename: registerData.surename,
                  email: registerData.email,
                  password: registerData.password,
                  cardid: registerData.cardid,
                  terminaltoken: terminalToken
                 }
      });

  }

  // -------  Login Methods  ------------------------


  public checkLogin(login: string, password: string): Observable<any> {

    const url: string = this.appApiService.getPluginApiUrl() + 'check_user_login';

    return this.http.post<any>(url, {
        params: { username: login, password }
      }); //.catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));

  }


  public getUserData(login: string, password: string): Observable<UserData> {

    const url: string = this.appApiService.getPluginApiUrl() + 'get_user_login_data';

    return this.http.get<any>(url, {
      params: { username: login, password }
    }); //.catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));

  }

  public checkLoginToken(submitcode: string): Observable<any> {

    const url: string = this.appApiService.getPluginApiUrl() + 'check_nfc_token';

    return this.http.get<any>(url, {
        params: { token: submitcode }
      }).pipe(catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));

  }
  // -------  get Statistic Data  ------------------------

  public getStatisticOf(start: string, end: string): Observable<DeviceStatistics[]> {

    const url: string = this.appApiService.getPluginApiUrl() + 'statistic';
    //let statisticUrl = 'http://fablab.tugraz.at/wp-json/sharepl/v1/statistic';

    return this.http.get<DeviceStatistics[]>(url, {
        params: {
          start_date: start,
          end_date: end
        }
      }).pipe(catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));

  }

  // -------  handleErrors  ------------------------

  private handleHttpError(err: HttpErrorResponse): void  {
    console.log(err);
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}, body was: ${err.error.message}`);
    }
    if (err.status === 403) {
      this.appApiService.setDevUserLoggedOut();
      this.refresh();
    }
  }


  private refresh(): void {
    window.location.reload();
  }
}

