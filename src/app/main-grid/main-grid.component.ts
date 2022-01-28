import { DashboardService } from '../services/dashboard.service';
import { DashboardItem } from './dashboard-item/dashboard-item.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Dashboard } from './dashboard.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css'],
})
export class MainGridComponent implements OnInit {
  dashBoardItems: DashboardItem[];
  name: string;
  selectedDashboard: Dashboard;
  @Input() id: number;
  selectDashboardSub = new Subscription();
  dashboardClearedSub = new Subscription();
  dashboardSelected: boolean = false;
  selectDashboard = new Subscription();

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    // Get selected dashboard on init
    this.selectDashboardSub = this.dashboardService.dashboardSelected.subscribe(
      (dashboard: Dashboard) => {
        this.selectedDashboard = dashboard;
        this.dashBoardItems = dashboard.items;
        this.dashboardSelected = true;
      }
    );

    this.dashboardService.dashboardCleared.subscribe(() => {
      this.dashboardSelected = false;
    });

    this.selectDashboard = this.dashboardService.dashboardSelected.subscribe(
      (dashboard: Dashboard) => {
        this.selectedDashboard = dashboard;
        this.dashBoardItems = dashboard.items;
      }
    );
  }

  ngOnDestroy() {
    this.selectDashboardSub.unsubscribe();
    this.dashboardClearedSub.unsubscribe();
  }
}
