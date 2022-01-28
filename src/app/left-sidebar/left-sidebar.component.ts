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
  private cancelDashboardSub: Subscription;
  index: number;
  dashboard: Dashboard;
  alert: string;
  confirm: string;
  dashDeleteCanceled: boolean = true;
  dashWasDeleted: boolean = false;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashArray = this.dashboardService.getArray();
    this.dashboardSub = this.dashboardService.dashboardsChanged.subscribe(
      (dashboard: Dashboard[]) => {
        this.dashArray = dashboard;
    });
    this.cancelDashboardSub = this.dashboardService.cancelDelete.subscribe(didCancel => {
      this.dashDeleteCanceled = didCancel;
    });
    this.deletedDashboardSub = this.dashboardService.dashboardDeleted.subscribe(
      (dashboard) => {
      this.alert = 'Dashboard was successfully deleted!';
    });
  }

  ngOnDestroy(): void {
    this.dashboardSub.unsubscribe();
    this.deletedDashboardSub.unsubscribe();
    this.selectedDashboardSub.unsubscribe();
    this.cancelDashboardSub.unsubscribe();
  }

  onAddDashboard() {
    this.dashboardService.addDashboard.next();
  }

  onConfirmDelete() {
    this.confirm = 'Are you sure you want to delete the selected dashboard?';
  }
  
  onRemoveDashboard(index) {
    if (this.dashDeleteCanceled) {
      this.confirm = null;
    } else {
      this.dashboardService.deleteDashboard(index);
    }
  }

  onDashboardSelected(dashboard: Dashboard, index: number) {
    this.dashboardService.dashboardSelected.next(dashboard);
    this.index = index;
    this.dashboardService.deleteDashboard(index);
  }

  onCancel(boolean) {
    this.confirm = null;
  }

  handleCloseMsg() {
    this.alert = null;
  }

  onDashboardSelected(dashboard, i: number) {
    this.dashboardService.dashboardSelected.next(dashboard);
    this.dashboardService.currDashIdx = i;
  }
}
