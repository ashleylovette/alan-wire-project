import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Dashboard } from '../main-grid/dashboard.model';
import { DashboardService } from '../services/dashboard.service';
import { HTTPService } from '../services/http.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent implements OnInit, OnDestroy {
  dashArray: Dashboard[] = [];
  private dashboardChangedSub: Subscription;
  private deletedDashboardSub: Subscription;
  private selectedDashboardSub: Subscription;
  private cancelDashboardSub: Subscription;
  currentId: number;
  index: number;
  confirmed: boolean = true;
  dashWasDeleted: boolean = false;
  messageClearedSub: Subscription;
  // resData: any;

  constructor(
    private dashboardService: DashboardService,
  ) {}

  ngOnInit(): void {
    this.dashboardService.fetchCustomDashboards();

    this.dashboardChangedSub =
      this.dashboardService.dashboardsChanged.subscribe(
        (dashboards: Dashboard[]) => {
          this.dashArray = dashboards;
          console.log(this.dashArray);
        }
      );
    this.cancelDashboardSub = this.dashboardService.cancelDelete.subscribe(
      () => {
        this.confirmed = true;
        this.dashWasDeleted = false;
      }
    );
    this.deletedDashboardSub = this.dashboardService.dashboardDeleted.subscribe(
      () => {
        this.confirmed = true;
        this.dashWasDeleted = true;
      }
    );
  }

  ngOnDestroy(): void {
  }

  onAddDashboard() {
    this.dashboardService.addDashboard.next();
  }

  onConfirmDelete() {
    this.confirmed = false;
  }

  onDashboardSelected(dashboard: Dashboard, index: number) {
    this.dashboardService.dashboardSelected.next(dashboard);
    this.dashboardService.currDashIdx = index;
    this.index = index;
    this.dashboardService.currentDashId = dashboard.id;
  }
}
