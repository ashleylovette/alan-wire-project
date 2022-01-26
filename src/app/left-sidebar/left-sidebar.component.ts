
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Dashboard } from '../main-grid/dashboard.model';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent implements OnInit, OnDestroy {
  dashArray: Dashboard[];
  private dashboardSub: Subscription
  index: number;
  dashboard: Dashboard;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashArray = this.dashboardService.getArray();

    this.dashboardSub = this.dashboardService.dashboardsChanged.subscribe(
      (dashboard: Dashboard[]) => {
        this.dashArray = dashboard;
      }
    );
  }
  ngOnDestroy(): void {
    this.dashboardSub.unsubscribe();
  }

  onAddDashboard() {
  this.dashboardService.addDashboard.next();
  }

  onRemoveDashboard(index) {
    this.dashboardService.deleteDashboard(index);
  }
  onDashboardSelected(dashboard, index: number) {
    this.dashboardService.dashboardSelected.next(dashboard);
    this.index = index;
  }

}
