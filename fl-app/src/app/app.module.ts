import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BrowserXhr, HttpModule } from '@angular/http';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { StatisticService }          from './statistic/statistic.service';
import { StatisticComponent } from './statistic/statistic.component';
import { ChartService } from './statistic/chart.service';

import { DatePipe } from '@angular/common';

import { NvD3Module } from 'ng2-nvd3';

// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';



/* for angular 4.3 and later
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';

@NgModule({
 providers: [
   // ...
   { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
 ],
 imports: [
   // ...
   HttpClientModule,
   NgProgressModule
 ]
})
*/



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpModule,
    NgProgressModule,
    AppRoutingModule,
    NvD3Module
  ],
  declarations: [
    AppComponent,
    StatisticComponent
  ],
  providers: [ 
    StatisticService, 
    ChartService,
    DatePipe,
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr } ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
