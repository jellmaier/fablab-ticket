import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppApiService, AppApiResponse } from './app-api.service';


import { DeviceStatistics } from 'app/statistic/statistic.service';


import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  
  constructor( private http: HttpClient, 
               private appApiService: AppApiService ) {}


  //--------  get_terminal_token  -----------------------
  public getTerminalToken() {
    let url = this.appApiService.getPluginApiUrl() + 'get_terminal_token';

    this.http.get<any>(url).subscribe(
          data =>  { console.log(data)},
          err =>  this.handleHttpError(err)
    );
  }


  // -------  Login Methods  ------------------------


  public checkLogin(login: string, password: string): Observable<any> {

    let url = this.appApiService.getPluginApiUrl() + 'check_user_login';

    return this.http.get<any>(url, {
        params: { username: login, password: password }
      }).catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));

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
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
  }
}

     