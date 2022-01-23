import { DashboardService } from '../services/dashboard.service';
import { DashboardItem } from './dashboard-item/dashboard-item.model';
import { Component, OnInit } from '@angular/core';
import { Dashboard } from './dashboard.model';


@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {
  dashBoardItems: DashboardItem[];
  name: string;
  selectedDashboard: Dashboard;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    // Get dashboard items on init
    // this.dashBoardItems = this.dashboardService.getDashboard();

    this.dashboardService.dashboardSelected.subscribe((dashboards: Dashboard) => {
      this.selectedDashboard = dashboards;
    });
  }

}
