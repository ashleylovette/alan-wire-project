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
  private dashboardSub: Subscription;
  private deletedDashboardSub: Subscription;
  private selectedDashboardSub: Subscription;
  index: number;
  dashboard: Dashboard;
  alert: string;
  confirm: string;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashArray = this.dashboardService.getArray();
    this.dashboardSub = this.dashboardService.dashboardsChanged.subscribe(
      (dashboard: Dashboard[]) => {
        this.dashArray = dashboard;
      }
    );
    this.deletedDashboardSub = this.dashboardService.dashboardDeleted.subscribe(
      (dashboard) => {
        this.alert = 'Dashboard was successfully deleted!';
      }
    );
  }

  ngOnDestroy(): void {
    this.dashboardSub.unsubscribe();
    this.deletedDashboardSub.unsubscribe();
    this.selectedDashboardSub.unsubscribe();
  }

  onAddDashboard() {
  this.dashboardService.addDashboard.next();
  }

  onConfirmDelete() {
    this.confirm = 'Are you sure you want to delete the selected dashboard?';

  }
  onRemoveDashboard(index) {
      this.dashboardService.deleteDashboard(index);
  }

  onDashboardSelected(dashboard, index: number) {
    this.dashboardService.dashboardSelected.next(dashboard);
    this.index = index;
  }

  handleCloseMsg() {
    this.alert = null;
    this.confirm = null;
  }
}
