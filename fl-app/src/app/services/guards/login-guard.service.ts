import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppApiService } from './../app-api.service';
import { TerminalService } from './../terminal.service';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
  constructor(private appApiService: AppApiService,
              private router: Router) {}

  canActivate() {
    console.log('IsLoggedInGuard#canActivate called');
    
    if( this.appApiService.isUserLoggedIn() == true) {
      return true;
    }
    else {
      this.router.navigate(['/terminallogin']);
      return false;
    }
  }
}

@Injectable()
export class IsNotLoggedInGuard implements CanActivate {
  constructor(private appApiService: AppApiService,
              private router: Router) {}

  canActivate() {
    console.log('IsNotLoggedInGuard#canActivate called');

    if( this.appApiService.isUserLoggedIn() == true) {
      this.router.navigate(['/startpage']);
      return false;
    }
    else {
      return true;
    }
  }
}

@Injectable()
export class IsAdminGuard implements CanActivate {
  constructor(private appApiService: AppApiService) {}

  canActivate():boolean {
    console.log('IsAdminGuard#canActivate called');

    if( this.appApiService.isAdmin() == true)
      return true;
    else
      return false;
  }
}

@Injectable()
export class IsTerminalGuard implements CanActivate {
  constructor(private appApiService: AppApiService,
              private terminalService: TerminalService, 
              private router: Router) {}

  canActivate(): Observable<boolean> | boolean  {
    console.log('IsTerminalGuard#canActivate called');
/*
    if(!this.terminalService.hasTerminalToken()) {
      this.router.navigate(['/login']);
      return false;
    }
*/
    if (this.appApiService.isTerminal()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;

    // check twice if the cookie is set
/*
    if (this.appApiService.isAppConnectLoaded()) {
      return this.appApiService.isTerminal();
    }

    return this.terminalService.checkTerminalToken().map(data => data.is_terminal);
*/
    // Navigate to the login page with extras
    //this.router.navigate(['/login']);
    //return false;
  }
}