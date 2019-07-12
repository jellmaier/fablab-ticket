import { Injectable } from '@angular/core';

@Injectable()
export class ChartService {

  constructor() { }


  // from 
  // https://github.com/krispo/ng2-nvd3
  // http://krispo.github.io/ng2-nvd3/
  // http://krispo.github.io/angular-nvd3/#/pieChart

  getOptions():Object {
    return {
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
      }
    }
  };

  getData():Array<any> { 
    return [{"id":29,"name":"3D Drucker","color":"#AEDE1A","number":1,"duration":1},
      {"id":28,"name":"CNC-Fr\u00e4se","color":"#2B79DE","number":1,"duration":1},
      {"id":27,"name":"Lasercutter","color":"#F6831E","number":1,"duration":1},
      {"id":31,"name":"Sandstrahlmaschine","color":"#449ACD","number":1,"duration":1},
      {"id":30,"name":"Vinylcutter","color":"#860090","number":1,"duration":1}
    ];
  }

  getlinechartoptions():Object {
    return {
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
        interpolate: "cardinal",
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
    }
  };

}
