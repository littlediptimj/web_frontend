import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard-report',
  templateUrl: './dashboard-report.component.html',
  styleUrl: './dashboard-report.component.scss'
})
export class DashboardReportComponent {

  ngOnInit() {
    this.initPieChart();
  }


  initPieChart() {
    const chart = Highcharts.chart('chart-pie', {
      chart: {
        // plotBackgroundColor: null,
        // plotBorderWidth: null,
        // plotShadow: false,
        type: 'pie',
        innerHeight:10,
        width: 300, // Width of the chart
        height: 200 
        
      },
     
      title: {
        text: '',
        align: 'left',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false, //data name
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
          colors: [ // Specify your custom colors here
            '#FF9999',
            '#66B2FF',
            '#99FF99',
            '#FFD700',
            '#FF6347'
            // Add more colors as needed
          ]
        },
      },
      series: [
        {
          type:'pie',
          name: 'report',
          colorByPoint: true,

          data: [{
            name:'applied leave',
            y:5
          },
          {
            name:'approved leave',
            y:3
          },
          {
            name:'leave Balance',
            y:7
          }
        ]
        },
      ],
      
    } as any);

}



}
