import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { DashboardItem } from '../main-grid/dashboard-item/dashboard-item.model';

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
  getCustomDashboards() {
      return this.http
      .get(`${this.testUrl}custom_dashboards/index`)
  }

  //update
  updateCustomDashboard(selectedDashId) {
    // return this.http.patch(`${this.testUrl}custom_dashboards/${selectedDashId}`)
  }
  //destroy
  deleteCustomDashboard(index: number) {
    return this.http.delete(`${this.testUrl}custom_dashboards/${index}`)
    .subscribe((res) => {
      console.log(res);
    })
  }
  // Dashboard Item Requests

  //Salesman Requests?
}
