import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppApiService, AppApiResponse } from './app-api.service';


@Injectable()
export class HttpService {
  
  constructor( private http: HttpClient, 
               private appApiService: AppApiService ) {}


  //--------  get_terminal_token  -----------------------
  public getTerminalToken() {
      this.http.get<any>( this.appApiService.getPluginApiUrl() + 'get_terminal_token',
        { //headers: this.httpAuthHeader()
          //headers: {'X-WP-Nonce':  this.nonce,  /*this.appApiService.getNonce() */ }
                    }).subscribe(
          data =>  { console.log(data)},
          err =>  this.handleHttpError(err)
    );
  }

  // -------  handleErrors  ------------------------

  public handleHttpError(err: HttpErrorResponse) {
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

     