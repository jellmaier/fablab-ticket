import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatisticComponent } from './pages/statistic/statistic.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { TerminalLoginComponent } from './pages/login/terminallogin/terminallogin.component';
import { NfcLoginComponent } from './pages/login/nfclogin/nfc-login.component';
 
import { IsNotLoggedInGuard, IsLoggedInGuard, IsAdminGuard, IsTerminalGuard } from './services/guards/login-guard.service';
import { appRoutes } from './app-routs';
import { ProfilesComponent } from './pages/profiles/profiles.component';

const routes: Routes = [
  { path: '', redirectTo: appRoutes.login, pathMatch: 'full' },
  { path: appRoutes.loginOnTerminal, canActivate: [ IsNotLoggedInGuard, IsTerminalGuard ], component: TerminalLoginComponent },
  { path: appRoutes.loginNfc,      canActivate: [ IsNotLoggedInGuard, IsTerminalGuard ], component: NfcLoginComponent },
  { path: appRoutes.login,         component: LoginComponent },
  { path: appRoutes.register,      canActivate: [ IsNotLoggedInGuard ], component: RegisterComponent },
  { path: 'admin',                 canActivate: [ IsAdminGuard ],  component: AdminComponent },
  { path: appRoutes.profiles,           canActivate: [ IsLoggedInGuard ], component: ProfilesComponent, data: { redirect: true }},
  { path: appRoutes.profilesWithId,     canActivate: [ IsLoggedInGuard ], component: ProfilesComponent },
  { path: appRoutes.statistic,     canActivate: [ IsAdminGuard ],  component: StatisticComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}
