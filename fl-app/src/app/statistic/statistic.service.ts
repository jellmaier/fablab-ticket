import { Injectable } from '@angular/core';
import { HttpService } from 'app/services/http.service';


import { Observable }     from 'rxjs';

export interface Week {
  monday?: Date
  sunday?: Date
}

export interface DeviceStatistics {
  id: number
  name: string
  color: string
  number: number
  duration: number
}


@Injectable()
export class StatisticService {

  private statisticUrl = 'http://fablab.tugraz.at/wp-json/sharepl/v1/statistic';  // URL to web api

  constructor(private httpService: HttpService) { }

  getStatisticOfWeek(week: Week): Observable<DeviceStatistics[]> {

    return this.httpService.getStatisticOf(this.getDateString(week.monday), 
                                           this.getDateString(week.sunday));
    
  }

  private getDateString(date:Date):string {
    return date.getFullYear() + "-" + date.getMonth()+ "-" + date.getDate();
  }

}

