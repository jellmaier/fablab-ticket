import { Observable, throwError as observableThrowError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { AppApiService, UserData } from './app-api.service';

import { CookieService } from 'ngx-cookie-service';

import { DeviceStatistics } from 'app/pages/statistic/statistic.service';
import { UserRegister } from '../pages/login/register/register.component';
import { Router } from '@angular/router';
import { Link, Links } from './link.service';

export interface BasicResource {
  _links: Links;
}

export interface Params {
  [index: string]: string;
}

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

  // --- HATEOAS Methods ------------------------

  public getResourceByHref<T>(href: string): Observable<T> {
    const url: string = this.appApiService.getRestBaseUrl() + href;
    return this.http.get<T>(url).pipe(
      catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));
  }

  public requestByLink<T>(link: Link): Observable<T> {
    const url: string = this.appApiService.getRestBaseUrl() + link.href;
    let options: {
      body?: any;
      params?: HttpParams | {
        [param: string]: string | string[];
      };
    };

    if (!!link.params) {
      if (link.type === 'GET') {
        options = {params: link.params};
      } else {
        options = {body: link.params};
      }
    }
    return this.http.request<T>(link.type, url, options).pipe(
      catchError((err: HttpErrorResponse) => observableThrowError(this.handleHttpError(err))));
  }

  public getCurrentResource<T>(): Observable<T> {
    const url: string = this.appApiService.getRestBaseUrl() + this.router.url.substr(1); // delete / from router url
    return this.http.get<T>(url).pipe(
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

