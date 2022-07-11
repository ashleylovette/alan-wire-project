// NEEDS

//Observable/Subject to update UI when this array changes.

// Function to return ONLY the selected Dashboard's contents.
// Function to Delete Selected Item from Selected Dashboard.

import { EventEmitter, Injectable } from '@angular/core';
import { Dashboard } from '../main-grid/dashboard.model';
import { DashboardItem } from '../main-grid/dashboard-item/dashboard-item.model';
import { Subject } from 'rxjs';
import { HTTPService } from './http.service';
import { Salesman } from '../main-grid/dashboard-item/salesman.model';
import { HttpClient } from '@angular/common/http';

import { report } from 'process';
import { map, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  cancelDelete = new EventEmitter();
  deleteDash = new Subject<Dashboard>();
  dashboardDeleted = new EventEmitter();
  dashboardsChanged = new Subject<Dashboard[] | any>();
  dashboardSelected = new Subject<object>();
  dashboardCleared = new EventEmitter<any>();
  dashboardWasSelected: boolean;
  currDashIdx: number;
  currentDashId: number;
  currentDashboard: Dashboard;
  totalSalesArray = [];
  totalQtyArray = [];
  testUrl = 'http://localhost:3000/api/v1/';
  resData: any;
  dashboards: Dashboard[] = [];
  editMode: boolean = false;
  addDashboard = new Subject<void>();


  constructor(private httpService: HTTPService) {}

  createDashboard(dashData: string) {
    this.httpService.createCustomDashboard(dashData);
    this.dashboards = [];
    this.fetchCustomDashboards();
  }

  setDboards() {
    this.dashboardsChanged.next(this.dashboards);
  }

  deleteDashboard() {
    const id = this.currentDashId
    if (id !== -1) {
      this.httpService.deleteCustomDashboard(id)

      this.dashboardsChanged.next(this.dashboards.slice());
    }
  }

  getName(index: number) {
    return this.dashboards[index].name;
  }

  addDashItem(dashItem: DashboardItem) {
    this.dashboards[this.currDashIdx].items.push(dashItem);
  }

  deleteDashItem(currItemIdx: number) {
    this.dashboards[this.currDashIdx].items.splice(currItemIdx, 1);
  }

  refreshDashboards() {
    this.dashboards = [];
    this.fetchCustomDashboards();
    this.dashboardsChanged.next(this.dashboards);
  }

  fetchCustomDashboards() {
    this.dashboards = [];
    this.httpService.getCustomDashboards().subscribe(res => {
      this.resData= res;
      this.resData.payload.map(x => {
        const newDash = new Dashboard(
          x.id,
          x.name,
          x.dashboard_item
        )
        this.dashboards.push(newDash);
      })
      this.dashboardsChanged.next(this.dashboards);
    });
  }

  updateDashboards() {
    const dashId = this.currentDashId;
    const dash = this.currentDashboard;
    console.log('dashId', dashId);
    console.log('dash', dash);
    this.httpService.updateCustomDashboard(dashId, dash);
  }

  updateDashboard(newDashName) {
    console.log(this.currentDashId, 'NewDashName', newDashName, this.currentDashboard);
    this.httpService.updateDashboard(this.currentDashId, this.currentDashboard, newDashName);
    this.refreshDashboards();
  }

  getDashboards() {
    return this.dashboards.slice();
  }
}
