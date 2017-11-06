import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { StatisticService }          from './statistic/statistic.service';
import { StatisticComponent } from './statistic/statistic.component';

import { NvD3Module } from 'ng2-nvd3';

// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NvD3Module
  ],
  declarations: [
    AppComponent,
    StatisticComponent
  ],
  providers: [ StatisticService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
