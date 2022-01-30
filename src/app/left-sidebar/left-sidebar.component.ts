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
  private dashboardChangedSub: Subscription;
  private deletedDashboardSub: Subscription;
  private selectedDashboardSub: Subscription;
  // private cancelDashboardSub: Subscription;
  index: number;
  // dashboards: Dashboard;
  // alert: string;
  confirm: boolean = false;
  // dashDeleteCanceled: boolean = true;
  dashWasDeleted: boolean = false;
  messageClearedSub: Subscription;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashArray = this.dashboardService.getArray();

    this.dashboardChangedSub = this.dashboardService.dashboardsChanged.subscribe(
      (dashboards: Dashboard[]) => {
          this.dashArray = dashboards;
        });

    // this.cancelDashboardSub = this.dashboardService.cancelDelete.subscribe(didCancel => {
    //   this.dashDeleteCanceled = didCancel;
    // });

    this.deletedDashboardSub = this.dashboardService.deleteDash.subscribe(() => {
      this.dashWasDeleted = true;
    });
    this.messageClearedSub = this.dashboardService.messageCleared.subscribe(() => {
      this.dashWasDeleted = false;
    })
  }

  ngOnDestroy(): void {
    this.dashboardChangedSub.unsubscribe();
    this.deletedDashboardSub.unsubscribe();
    this.selectedDashboardSub.unsubscribe();
    // this.cancelDashboardSub.unsubscribe();
    this.messageClearedSub.unsubscribe();
  }

  onAddDashboard() {
    this.dashboardService.addDashboard.next();
  }

  onConfirmDelete() {
    this.confirm = true;

    this.dashboardService.dashboardsChanged.next(this.dashArray);
    // this.dashboardService.getArray();
  }

  onRemoveDashboard(index) {
    this.dashboardService.deleteDashboard(index);
    // this.dashboardService.getArray();
    this.dashboardService.dashboardsChanged.next(this.dashArray);

  }

  onDashboardSelected(dashboard: Dashboard, index: number) {
    this.dashboardService.dashboardSelected.next(dashboard);
    this.dashboardService.currDashIdx = index;
    this.index = index;
  }

  onCancel() {
    this.confirm = false;
  }

  // handleCloseMsg() {
  //   console.log('closed');
  // }

}
