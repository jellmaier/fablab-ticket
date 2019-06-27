import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AppApiService } from './app-api.service';

import { Observable } from 'rxjs';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private appApiService: AppApiService) {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    const authReq: HttpRequest<any> = req.clone({setHeaders: this.httpAuthHeader()});
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }

  private httpAuthHeader(): { [name: string]: string; } {
    if (this.appApiService.isUserLoggedIn()) {
      return {'X-WP-Nonce':  this.appApiService.getNonce() };
    }
  }
}


    


      
