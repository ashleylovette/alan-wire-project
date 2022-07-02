// NEEDS

//Observable/Subject to update UI when this array changes.

// Function to return ONLY the selected Dashboard's contents.
// Function to Delete Selected Item from Selected Dashboard.

import { EventEmitter, Injectable } from '@angular/core';
import { Dashboard } from '../main-grid/dashboard.model';
import { DashboardItem } from '../main-grid/dashboard-item/dashboard-item.model';
import { Subject } from 'rxjs';
import { DashboardItemService } from './dashboard-item.service';
import { HTTPService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  cancelDelete = new EventEmitter();
  deleteDash = new Subject<Dashboard>();
  dashboardDeleted = new EventEmitter();
  dashboardsChanged = new Subject<Dashboard[]>();
  dashboardSelected = new Subject<object>();
  dashboardCleared = new EventEmitter<any>();
  dashboardWasSelected: boolean;
  currDashIdx: number;

  private dashArray: Dashboard[] = [];

  addDashboard = new Subject<void>();

  constructor(private dashboardItemService: DashboardItemService,
              private httpService: HTTPService) {}

  getDashNames(index: number) {
    return this.dashArray[index].name;
  }

  getArray() {
    return this.dashArray.slice();
  }

  setDashboards(dashboards: Dashboard[]) {
    this.dashArray = dashboards;
    this.dashboardsChanged.next(this.dashArray.slice());
  }

  createDashboard(dashData: Dashboard) {
    this.httpService.createCustomDashboard(dashData.name);

    // const newDash: Dashboard = {
    //   name: name,
    //   items: [],
    // };
    // this.dashArray.push(newDash);
    // this.dashboardsChanged.next(this.dashArray.slice());
  }

  deleteDashboard(index: number) {
    if (index !== -1) {
      this.dashArray.splice(index, 1);
      this.deleteDash.next(this.dashArray[index]);
      this.dashboardsChanged.next(this.dashArray.slice());
    }
  }

  getName(index: number) {
    return this.dashArray[index].name;
  }

  getDashboard(index: number) {
    return this.dashArray.slice()[index];
  }

  addDashItem(dashItem: DashboardItem) {
    this.dashArray[this.currDashIdx].items.push(dashItem);
  }

  deleteDashItem(currItemIdx: number) {
    this.dashArray[this.currDashIdx].items.splice(currItemIdx, 1);
  }
}
