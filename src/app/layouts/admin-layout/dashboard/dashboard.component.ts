import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-unica';
theme(Highcharts);
import HC_exporting from 'highcharts/modules/exporting';
import {RequestService} from "../users/request.service";
import {users} from "../users/users.component";
import {audit} from "../users/audit.model";
import {level} from "./level.models";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};
  users:users[];
  audits:audit[];
  levels:level[];
  sel=false;
  constructor(private requestService:RequestService) { }

  async ngOnInit(){
    this.users = await this.requestService.get_users().toPromise();
    this.audits = await this.requestService.get_audits().toPromise();
    this.levels=await this.requestService.get_levels().toPromise();
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Levels used by testers'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: this.levels,
      }]
    };

    HC_exporting(Highcharts);
    this.sel=true;
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
