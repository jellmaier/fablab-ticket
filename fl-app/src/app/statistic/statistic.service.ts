import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


interface Week {
  monday?: Date
  sunday?: Date
}


@Injectable()
export class StatisticService {

  private statisticUrl = 'http://fablab.tugraz.at/wp-json/sharepl/v1/statistic';  // URL to web api

  constructor(private http: Http) { }

  getStatisticOfWeek(week:Week): Promise<any[]> {
    
    let url = this.statisticUrl + 
            "?start_date=" + this.getDateString(week.monday)
            + "&end_date=" + this.getDateString(week.sunday);
    //console.log(url);
    return this.http.get(url).toPromise()
             .then(response => response.json() as any[])
             .catch(this.handleError);
    }

    private getDateString(date:Date):String {
      return date.getFullYear() + "-" + date.getMonth()+ "-" + date.getDate();
    }

     
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
    
/*
  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

*/

}

