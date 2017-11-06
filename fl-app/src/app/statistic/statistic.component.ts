import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { StatisticService } from './statistic.service';

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

  constructor(private statisticService: StatisticService) { }

  options;
  data;
  currentWeek;

  linechartoptions
  datatrend;
  showchart;

  index = 100;

  private setData(increment:boolean) {

    if (increment)
      this.index++;
    else
      this.index--;

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


  @ViewChild('linechart') linechart;

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


  private addStatisticData(data:Array<any>, week:Week, offset:number):void {
 
    for (let entry of data) {

      if (this.datatrend.find(x => x.key == entry.name)) {
        // push data to existing entry
        this.datatrend.find(x => x.key == entry.name).values
            .push({ x: 100-offset, y: entry.number, label: this.getWeekString(week)});
        this.datatrend.find(x => x.key == entry.name).values.sort(function (a, b) {
          return d3.ascending(a.x, b.x);
        });
      } else {
        //create new entry
        this.datatrend.push({
              key: entry.name,
              values: [ {x: 100-offset, y: entry.number , //week.monday.valueOf()
                      
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

  private loadStatistic(week:Week, offset:number):void {
    this.statisticService.getStatisticOfWeek(week)
    .then(statisticdata => {
      this.data = statisticdata;
      this.addStatisticData(statisticdata, week, offset);
    });

  }



  ngOnInit() {

    this.datatrend = [];
 
    
    for (let i:number = 0; i < 12; i++)
      this.loadStatistic(this.getWeek(i), i);


    // from 
    // https://github.com/krispo/ng2-nvd3
    // http://krispo.github.io/ng2-nvd3/
    // http://krispo.github.io/angular-nvd3/#/pieChart

    this.options = {
      chart: {
        type: 'pieChart',
        height: 300,
        donut: true,
        x: function(d){return d.name;},
        y: function(d){return d.number;},
        color: function(d){return d.color;},
        showLabels: false,
        labelsOutside: true,
        donutRatio: 0.65,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 0,
            bottom: 10,
            left: 0
          },
          rightAlign: false
        }
      },
    };

  	this.data = [{"id":29,"name":"3D Drucker","color":"#AEDE1A","number":1,"duration":1},
      {"id":28,"name":"CNC-Fr\u00e4se","color":"#2B79DE","number":1,"duration":1},
      {"id":27,"name":"Lasercutter","color":"#F6831E","number":1,"duration":1},
      {"id":31,"name":"Sandstrahlmaschine","color":"#449ACD","number":1,"duration":1},
      {"id":30,"name":"Vinylcutter","color":"#860090","number":1,"duration":1}
    ];

    this.linechartoptions = {
      chart: {
          type: 'lineChart',
          height: 450,
          margin : {
              top: 20,
              right: 20,
              bottom: 40,
              left: 55
          },
          x: function(d){ return d.x; },
          y: function(d){ return d.y; },
          useInteractiveGuideline: true,
          refreshDataOnly: true,
          deepWatchOptions: true,
          deepWatchData: true,
          dispatch: {
              stateChange: function(e){ console.log("stateChange"); },
              changeState: function(e){ console.log("changeState"); },
              tooltipShow: function(e){ console.log("tooltipShow"); },
              tooltipHide: function(e){ console.log("tooltipHide"); }
          },
          xAxis: {
              axisLabel: 'Woche'
          },
          yAxis: {
              axisLabel: 'User',
              axisLabelDistance: -10
          }
      },
      title: {
          enable: true,
          text: 'Title for Line Chart'
      }
    };
    
  };
  

  

}
