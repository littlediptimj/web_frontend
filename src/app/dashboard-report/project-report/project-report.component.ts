import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-project-report',
  templateUrl: './project-report.component.html',
  styleUrl: './project-report.component.scss'
})
export class ProjectReportComponent {
  ngOnInit(): void {
    this.report();
  }

  report() {
    const lineChart = Highcharts.chart('container', {
      chart: {
        type: 'bar',
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17'],
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Goals',
        },
      },
      legend: {
        reversed: true,
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
          {
            name: 'Total',
            data: [4, 4, 6, 15, 12]
        },
        {
          name: 'Ongoing',
          data: [5, 3, 12, 6, 11],
        },
        {
          name: 'Completed',
          data: [5, 15, 8, 5, 8],
        },
      ],
    } as any);
  }
}
