import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatisticComponent }   from './statistic/statistic.component';

const routes: Routes = [
  { path: '', redirectTo: '/statistic', pathMatch: 'full' },
  //{ path: 'dashboard',  component: DashboardComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'heroes',     component: HeroesComponent },
  { path: 'statistic',     component: StatisticComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
