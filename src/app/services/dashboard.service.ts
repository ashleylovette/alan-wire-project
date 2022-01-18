import { Injectable } from '@angular/core';
import { DashboardItem } from '../main-grid/dashboard-item/dashboard-item.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private dashboard: DashboardItem[] = [
    new DashboardItem(
      'Test 1',
      3,
      'https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg'
    ),
    new DashboardItem(
      'Test 2',
      1,
      'https://cdn.corporatefinanceinstitute.com/assets/bar-and-line-graph-1.jpg'
    ),
    new DashboardItem(
      'Test Table',
      2,
      'https://cdn.corporatefinanceinstitute.com/assets/bar-and-line-graph-1.jpg'
      // 'https://blogs.sas.com/content/graphicallyspeaking/files/2014/12/graphTable-300x225.png'
    ),
  ];

  constructor() {}

  getName() {}

  getDashboard() {
    return this.dashboard.slice();
  }

  addItem(newItem: DashboardItem) {
    this.dashboard.push(newItem);
    this.getDashboard();
  }

  deleteItem(index: number) {
    this.dashboard.splice(index, 1);
    this.getDashboard();
  }
}
