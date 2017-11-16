import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { StatisticService } from './statistic.service';
import { ChartService } from './chart.service';

import { DatePipe } from '@angular/common';

declare let d3: any;


interface Week {
  monday?: Date
  sunday?: Date
}

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
    // include original styles
  styleUrls: [
    '../../../node_modules/nvd3/build/nv.d3.css',
    './statistic.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})


export class StatisticComponent implements OnInit {

  constructor(private statisticService: StatisticService,
              private chartService: ChartService,
              private datePipe: DatePipe) { }


  options;
  data;
  currentWeek;

  linechartoptions
  datatrend;
  showchart;  

  index = 0;

  private checkLoadAndSetData(increment:boolean) {

    if (increment)
      this.index++;
    else
      this.index--;

    if(this.datatrend[0].values.find(x => x.x == this.index))
      this.setData();
    else {
      console.log('noentry');
      let weeknuber:number = - this.index;
      this.loadStatistic(this.getWeek(weeknuber), weeknuber, true);
      return;
    }

  }

  private setData() {

    let data = [];
    console.log(this.datatrend);

    for (let entry of this.datatrend) {
      let dataentry = entry.values.find(x => x.x == this.index);
      data.push({ 
        name: entry.key, 
        color: entry.color, 
        number : dataentry.y 
      });
      this.currentWeek = dataentry.label;
    }
    this.data = data;
    
  }

  private getWeek(earlierWeeks:number):Week {

    let current:Date = new Date();     // get current date   
    let weekend:number = current.getDate() - current.getDay() - (earlierWeeks * 7);   // day 0 is sunday 
    let weekstart:number = weekend - 6;       // end day is the first day + 6 	
    let monday:Date = new Date(current.setDate(weekstart));  
    current = new Date();     // reset current date
    let sunday:Date = new Date(current.setDate(weekend));

    let week:Week = {
        monday: monday,
        sunday: sunday
    };

	  return week;
  }
/*
  private getDateString2(date:Date):String {
    return "" + date.getFullYear() + date.getMonth() + date.getDate();
  }
*/

  @ViewChild('linechart') linechart;

  private addStatisticData(data:Array<any>, week:Week, offset:number):void {


    let string = Number(this.datePipe.transform(week.monday, 'yyMMdd'));
  // week.monday | date :'fullDate');

    for (let entry of data) {

      if (this.datatrend.find(x => x.key == entry.name)) {
        // push data to existing entry
        this.datatrend.find(x => x.key == entry.name).values
            .push({ x: -offset, y: entry.number, label: this.getWeekString(week)});
        this.datatrend.find(x => x.key == entry.name).values.sort(function (a, b) {
          return d3.ascending(a.x, b.x);
        });
      } else {
        //create new entry
        this.datatrend.push({
              key: entry.name,
              values: [ {x: -offset, y: entry.number , //week.monday.valueOf()
                      
                      label: this.getWeekString(week)
              } ],
              color: entry.color 
        });
      }
    }

    this.linechart.chart.update();

  }

  private getWeekString(week:Week):String {
    return week.monday.toDateString() + ' - ' + week.sunday.toDateString();
  }

  private loadStatistic(week:Week, offset:number, setData:boolean = false):void {
    this.statisticService.getStatisticOfWeek(week)
    .then(statisticdata => {
      this.data = statisticdata;
      this.addStatisticData(statisticdata, week, offset);
      if (setData)
        this.setData();
    });
  }



  ngOnInit() {

    this.datatrend = [];
    this.options = this.chartService.getOptions();
    this.data = this.chartService.getData();
    this.linechartoptions = this.chartService.getlinechartoptions();  

    for (let i:number = 0; i < 12; i++)
      this.loadStatistic(this.getWeek(i), i);

  };
  

  

}
