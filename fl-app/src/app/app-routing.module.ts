import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatisticComponent } from './statistic/statistic.component';
import { StartpageComponent } from './startpage/startpage.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { TerminalLoginComponent } from './login/terminallogin/terminallogin.component';
import { NfcLoginComponent } from './login/nfclogin/nfc-login.component';
 
import { IsNotLoggedInGuard, IsLoggedInGuard, IsAdminGuard, IsTerminalGuard } from './services/guards/login-guard.service';
import { appRoutes } from './app-routs';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileRedirectComponent } from './profile-redirect/profile-redirect.component';

const routes: Routes = [
  { path: '', redirectTo: appRoutes.loginOnTerminal, pathMatch: 'full' },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  { path: appRoutes.loginOnTerminal, canActivate: [ IsNotLoggedInGuard, IsTerminalGuard ], component: TerminalLoginComponent },
  { path: appRoutes.loginNfc,      canActivate: [ IsNotLoggedInGuard, IsTerminalGuard ], component: NfcLoginComponent },
  { path: appRoutes.startpage,     canActivate: [ IsLoggedInGuard ], component: StartpageComponent },
  { path: appRoutes.login,         canActivate: [ IsNotLoggedInGuard ], component: LoginComponent },
  { path: appRoutes.register,      canActivate: [ IsNotLoggedInGuard ], component: RegisterComponent },
  { path: 'admin',                 canActivate: [ IsAdminGuard ],  component: AdminComponent },
  { path: appRoutes.profiles,           canActivate: [ IsLoggedInGuard ], component: ProfileRedirectComponent },
  { path: appRoutes.profilesWithId,     canActivate: [ IsLoggedInGuard ], component: ProfilesComponent },
  { path: appRoutes.profilesAndTickets, canActivate: [ IsLoggedInGuard ], component: StartpageComponent },
  { path: appRoutes.statistic,     canActivate: [ IsAdminGuard ],  component: StatisticComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}
