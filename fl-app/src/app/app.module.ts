import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { StatisticService }          from './statistic/statistic.service';
import { StatisticComponent } from './statistic/statistic.component';
import { ChartService } from './statistic/chart.service';

import { LocalizeService } from  './services/localize.service';
import { HttpService } from  './services/http.service';
import { HttpInterceptorService } from  './services/http-interceptor.service';

import { CookieService } from 'ngx-cookie-service';

import { AppApiService } from  './services/app-api.service';

import { DatePipe } from '@angular/common';

import { NvD3Module } from 'ng2-nvd3';

// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';
import { LoginComponent } from './login/login/login.component';
import { TerminalLoginComponent }       from './login/terminallogin/terminallogin.component';
import { NfcloginComponent } from './login/nfclogin/nfclogin.component';
import { RegisterComponent } from './login/register/register.component';

import { IsLoggedInGuard, IsTerminalGuard } from './services/guards/login-guard.service';
import { TerminalService } from './services/terminal.service';

 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    AppRoutingModule,
    NvD3Module
  ],
  declarations: [
    AppComponent,
    StatisticComponent,
    LoginComponent,
    NfcloginComponent,
    RegisterComponent,
    TerminalLoginComponent,
  ],
  providers: [ 
    StatisticService, 
    ChartService,
    HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    AppApiService,
    DatePipe,
    IsLoggedInGuard,
    IsTerminalGuard,
    TerminalService,
    CookieService,
    //{ provide: BrowserXhr, useClass: NgProgressBrowserXhr },
     ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
