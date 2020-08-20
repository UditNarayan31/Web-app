import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-admin-chart',
  templateUrl: './admin-chart.component.html',
  styleUrls: ['./admin-chart.component.css']
})
export class AdminChartComponent implements OnInit {
chart = []
chart2 = []
  constructor() { }

  ngOnInit(): void {
    this.chart = new Chart('Canvas', {
      type: 'line',
      data: {
        labels:[10, 100, 200, 300, 400, 500, 600, 700,800],
        datasets:[
        {
           label:'Portfolio',
           data: [10,40,50,70,90],
           backgroundColor:'red',
           borderColor:'red',
           fill: false,
        },
        {
          label:'Blog-spot',
          data: [100,230,350,470,500],
          backgroundColor:'gray',
          borderColor:'gray',
          fill: false,
       },
       {
        label:'E-com',
        data: [200,430,550,670,700],
        backgroundColor:'pink',
        borderColor:'pink',
         fill: false,
     }
      ]
      },
     
    })


    this.chart2 = new Chart('circle', {
      type:'doughnut',
     
     data:{
      labels:['Portfolio', 'Blog-spot', 'E-com'],
       datasets:[
         {
         data:[10,20,30],
          borderColor:'pink',
          label:'Portfolio'
       },
      {data:[15,25,35]},
      {data:[20,30,40]},
      ],
      
     }
    })
  }

}
