import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StatisticService } from './pages/statistic/statistic.service';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ChartService } from './pages/statistic/chart.service';

import { HttpService } from './services/http.service';
import { HttpInterceptorService } from './services/http-interceptor.service';

import { CookieService } from 'ngx-cookie-service';

import { ParserService } from './services/parser.service';

import { AppApiService } from './services/app-api.service';

import { DatePipe } from '@angular/common';

import { NvD3Module } from 'ng2-nvd3';

import { FocusModule } from 'angular2-focus';

// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';
import { LoginComponent } from './pages/login/login/login.component';
import { TerminalLoginComponent } from './pages/login/terminallogin/terminallogin.component';
import { NfcLoginComponent } from './pages/login/nfclogin/nfc-login.component';
import { RegisterComponent } from './pages/login/register/register.component';

import { IsLoggedInGuard, IsNotLoggedInGuard, IsAdminGuard, IsTerminalGuard } from './services/guards/login-guard.service';
import { TerminalService } from './services/terminal.service';
import { AdminComponent } from './admin/admin/admin.component';
import { MyTicketsComponent } from './pages/profiles/my-tickets/my-tickets.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { DialogMatComponent } from './components/dialog-mat/dialog-mat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { DialogComponent } from './components/dialog/dialog.component';
import { ButtonComponent } from './components/button/button.component';
import { DevicesComponent } from './pages/profiles/devices/devices.component';
import { DeviceComponent } from './components/device/device.component';
import { InputMaskComponent } from './pages/login/login/input-mask/input-mask.component';

 
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    AppRoutingModule,
    NvD3Module,
    MatDialogModule,
    FocusModule.forRoot()
  ],
  declarations: [
    AppComponent,
    StatisticComponent,
    LoginComponent,
    NfcLoginComponent,
    RegisterComponent,
    TerminalLoginComponent,
    AdminComponent,
    MyTicketsComponent,
    TicketComponent,
    ProfilesComponent,
    DialogMatComponent,
    DialogComponent,
    ButtonComponent,
    DevicesComponent,
    DeviceComponent,
    InputMaskComponent,
  ],
  providers: [
    StatisticService,
    ChartService,
    HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    AppApiService,
    DatePipe,
    IsLoggedInGuard,
    IsNotLoggedInGuard,
    IsAdminGuard,
    IsTerminalGuard,
    TerminalService,
    CookieService,
    ParserService,
    //{ provide: BrowserXhr, useClass: NgProgressBrowserXhr },
     ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
