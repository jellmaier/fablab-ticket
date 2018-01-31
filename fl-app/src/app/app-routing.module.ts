import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatisticComponent }   from './statistic/statistic.component';
import { LoginComponent }       from './login/login/login.component';
import { TerminalLoginComponent }       from './login/terminallogin/terminallogin.component';
import { NfcloginComponent } from './login/nfclogin/nfclogin.component';
 
import { IsLoggedInGuard, IsTerminalGuard } from './services/guards/login-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/terminallogin', pathMatch: 'full' },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  { path: 'terminallogin',  canActivate: [ IsTerminalGuard ], component: TerminalLoginComponent },
  { path: 'loginnfc',     canActivate: [ IsTerminalGuard ], component: NfcloginComponent },
  { path: 'login',   component: LoginComponent },
  { path: 'statistic',     component: StatisticComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}
