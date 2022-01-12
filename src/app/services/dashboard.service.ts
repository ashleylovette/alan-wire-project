import { Injectable } from "@angular/core";
import { DashboardItem } from "../main-grid/dashboard-item.model";

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private dashboard: DashboardItem[] = [
    new DashboardItem('Test 1', '3', 'https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg'),
    new DashboardItem('Test 2', '4', 'https://cdn.corporatefinanceinstitute.com/assets/bar-and-line-graph-1.jpg')
    new DashboardItem('Test Table', '2', 'https://blogs.sas.com/content/graphicallyspeaking/files/2014/12/graphTable-300x225.png')
  ]

  constructor() {}

  getDashboard() {
    return this.dashboard.slice();
  }



}