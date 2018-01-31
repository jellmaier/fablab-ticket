import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppApiService } from './../app-api.service';
import { TerminalService } from './../terminal.service';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
  canActivate() {
    console.log('AuthGuard#canActivate called');
    return false;
  }
}

@Injectable()
export class IsAdminGuard implements CanActivate {
  canActivate() {
    console.log('AuthGuard#canActivate called');
    return false;
  }
}

@Injectable()
export class IsTerminalGuard implements CanActivate {
  constructor(private appApiService: AppApiService,
              private terminalService: TerminalService, 
              private router: Router) {}

  canActivate(): Observable<boolean> | boolean  {
    console.log('AuthGuard#canActivate called');

    if(!this.terminalService.hasTerminalToken()) {
      this.router.navigate(['/login']);
      return false;
    }

    if (this.appApiService.isAppConnectLoaded()) {
      return this.appApiService.isTerminal();
    }

    return this.terminalService.checkTerminalToken().map(data => data.is_terminal);

    // Navigate to the login page with extras
    //this.router.navigate(['/login']);
    //return false;
  }
}