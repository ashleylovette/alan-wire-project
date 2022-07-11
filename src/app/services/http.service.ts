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
  currentDashboard: any;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private dashboardService: DashboardService
  ) {}

  // Custom Dashboard Requests
  // create
  createCustomDashboard(name: any) {
    // console.log('name', name);
    const dashData: Dashboard = { name: name };
    this.http
      .post<{ name: string }>(`${this.testUrl}custom_dashboards`, dashData)

      .subscribe((resData) => {
        console.log(resData);
      });
    // console.log('dashData', dashData);
  }

  //read
  getCustomDashboards() {
      return this.http
      .get(`${this.testUrl}custom_dashboards/index`)
  }

  //update
  updateCustomDashboard(currentId: number, currentDashboard: Dashboard) {
    // console.log('id', currentId);
    // console.log('dashboard', currentDashboard);
    let currentDashId = currentId;
    const name = currentDashboard.name;
    const items = currentDashboard.items
    let modifiedDashboard = {
      name: name,
      dashbaord_item: items
    }

    console.log(modifiedDashboard)
    // console.log('currentDashId', currentDashId);
    return this.http.put<Dashboard>(`${this.testUrl}custom_dashboards/${currentDashId}`, currentDashboard).subscribe((res) => {
      console.log(res);
    }
    )
  }

  updateDashboard(id, dashboard, dashName) {
    this.currentDashboard = {
      name: dashName,
      items: dashboard.items,
      id: id
    }

    return this.http.put(`${this.testUrl}custom_dashboards/${id}`, this.currentDashboard)
    .subscribe(res => {
      console.log(res);
    })
  }

  //destroy
  deleteCustomDashboard(index: number) {
    return this.http.delete(`${this.testUrl}custom_dashboards/${index}`)
    .subscribe((res) => {
    })
  }
  // Dashboard Item Requests
  // get
  getDashboardItems() {
    return this.http.get(`${this.testUrl}dashboard_items/index`)
  }

  //Salesman Requests?
}
