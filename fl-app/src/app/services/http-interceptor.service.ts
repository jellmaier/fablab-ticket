import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AppApiService, AppApiResponse } from './app-api.service';

import {Observable} from 'rxjs/Observable';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private appApiService: AppApiService) {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    const authReq = req.clone({setHeaders: this.httpAuthHeader()});
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }

  private httpAuthHeader() {
    if (this.appApiService.isDevMode()){
      return {'Authorization': "Basic " + this.appApiService.getAutentificationToken() };
    } else {
      return {'X-WP-Nonce':  this.appApiService.getNonce() }
    }
  }
}


    


      
