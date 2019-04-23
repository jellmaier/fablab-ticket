import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatisticComponent }   from './statistic/statistic.component';
import { StartpageComponent }   from './startpage/startpage.component';
import { AdminComponent }   from './admin/admin/admin.component';
import { LoginComponent }       from './login/login/login.component';
import { RegisterComponent }       from './login/register/register.component';
import { TerminalLoginComponent }       from './login/terminallogin/terminallogin.component';
import { NfcloginComponent } from './login/nfclogin/nfclogin.component';
 
import { IsNotLoggedInGuard, IsLoggedInGuard, IsAdminGuard, IsTerminalGuard } from './services/guards/login-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/terminallogin', pathMatch: 'full' },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  { path: 'terminallogin',  canActivate: [ IsNotLoggedInGuard, IsTerminalGuard ], component: TerminalLoginComponent },
  { path: 'loginnfc',     canActivate: [ IsNotLoggedInGuard, IsTerminalGuard ], component: NfcloginComponent },
  { path: 'startpage',     canActivate: [ IsLoggedInGuard ], component: StartpageComponent },
  { path: 'login',  canActivate: [ IsNotLoggedInGuard ], component: LoginComponent },
  { path: 'register',  canActivate: [ IsNotLoggedInGuard ], component: RegisterComponent },
  { path: 'admin',   canActivate: [ IsAdminGuard ],  component: AdminComponent },
  { path: 'statistic',   canActivate: [ IsAdminGuard ],  component: StatisticComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}
