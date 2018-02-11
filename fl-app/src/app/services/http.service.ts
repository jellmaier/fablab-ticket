import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppApiService, AppApiResponse } from './app-api.service';

import { CookieService } from 'ngx-cookie-service';

import { DeviceStatistics } from 'app/statistic/statistic.service'
import { UserRegister } from '../login/register/register.component'

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  
  constructor( private http: HttpClient, 
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

    let url = this.appApiService.getPluginApiUrl() + 'ticket_system_online';
    let param = online ? 'online' : 'offline' ;

    return this.http.post<boolean>(url, {
        params: { set_online: param }
      }).catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));
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
    let url = this.appApiService.getPluginApiUrl() + 'get_terminal_token';

    return this.http.get<any>(url)
          .catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));
  }


  // -------  Register Methods  ------------------------

  public registerUser(registerData: UserRegister): Observable<any> {

    let url:string = this.appApiService.getPluginApiUrl() + 'register_user_on_terminal';

    let terminaltoken:string = this.cookieService.get('terminal_token'); // should be in terminal service

    return this.http.post<any>(url, {
        params: { username: registerData.username,
                  name: registerData.name,
                  surename: registerData.surename,
                  email: registerData.email,
                  password: registerData.password,
                  cardid: registerData.cardid,
                  terminaltoken: terminaltoken
                 }
      });

  }

  // -------  Login Methods  ------------------------


  public checkLogin(login: string, password: string): Observable<any> {

    let url = this.appApiService.getPluginApiUrl() + 'check_user_login';

    return this.http.get<any>(url, {
        params: { username: login, password: password }
      });//.catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));

  }

  public checkLoginToken(submitcode: string): Observable<any> {

    let url = this.appApiService.getPluginApiUrl() + 'check_nfc_token';

    return this.http.get<any>(url, {
        params: { token: submitcode }
      }).catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));

  }
  // -------  get Statistic Data  ------------------------

  public getStatisticOf(start: string, end: string): Observable<DeviceStatistics[]> {
    
    let url = this.appApiService.getPluginApiUrl() + 'statistic';
    //let statisticUrl = 'http://fablab.tugraz.at/wp-json/sharepl/v1/statistic';

    return this.http.get<DeviceStatistics[]>(url, {
        params: {
          start_date: start, 
          end_date: end
        }
      }).catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));

  }

  // -------  handleErrors  ------------------------

  private handleHttpError(err: HttpErrorResponse) {
    console.log(err);
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}, body was: ${err.error.message}`);
    }
  }
}

     