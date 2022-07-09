import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

import { Dashboard } from '../main-grid/dashboard.model';
import { DashboardService } from './dashboard.service';

@Injectable({ providedIn: 'root' })
export class HTTPService {
  testUrl = 'http://localhost:3000/api/v1/';
  reportData: any;
  dashboards: Dashboard[];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private dashboardService: DashboardService
  ) {}

  // Custom Dashboard Requests
  // create
  createCustomDashboard(name: any) {
    console.log('name', name);
    const dashData: Dashboard = { name: name };
    this.http
      .post<{ name: string }>(this.testUrl + 'custom_dashboards', dashData)

      .subscribe((resData) => {
        console.log(resData);
      });
    console.log('dashData', dashData);
  }
  //read
  // getCustomDashboards() {
  //   this.http
  //     .get(this.testUrl + 'custom_dashboards/index')
  //     .subscribe((dashboards) => {
  //       console.log('here', dashboards);
  //       console.log(this.dashboardService);
  //       this.dashboardService.tryAgain(dashboards);
  //     });
  // }

  // getCustomDashboards() {
  //   return this.http
  //     .get(`${this.testUrl}custom_dashboards/index`)
  //     .subscribe((res) => {
  //       this.reportData = res;
  //       console.log(this.reportData);
  //       this.dashboards = this.reportData.payload.map((x) => new Dashboard(x));
  //     });
  // }

  //update

  //destroy

  // Dashboard Item Requests

  //Salesman Requests?
}
