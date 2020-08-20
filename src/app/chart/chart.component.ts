import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
   chart = [];

  constructor() { }

  ngOnInit(): void {
    this.chart = new Chart('Canvas', {
      type: 'line',
      data: {
        labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
        datasets: [
          {
            label: 'Angular',
            data: [513, 1234, 1556, 2067, 2675, 3467],
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false,
          },
          {
            label: 'Security in Angular',
            data: [312, 745, 1236, 1742, 2239, 2733],
            backgroundColor: 'pink',
            borderColor: 'pink',
            fill: false,
          },
          {
            label: 'WordPress, Webflow',
            data: [510, 743, 956, 1211, 1427, 1648],
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false,
          },
          {
            label: 'Security in other open-source Application',
            data: [322, 556, 732, 916, 1167, 1329],
            backgroundColor: '#00ccff',
            borderColor: '#00ccff',
            fill: false,
          }
        ]
      }
    })
  }

}
