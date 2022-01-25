import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dashboard } from '../main-grid/dashboard.model';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent implements OnInit {
  dashArray: Dashboard[];
  @Input()index: number;
  @Input()dashboard: Dashboard;
  @Output()selectedDash = new EventEmitter<string>();


  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashArray = this.dashboardService.getArray();
    this.dashboardService.dashboardsChanged.subscribe((dashboard: Dashboard[]) => {
      this.dashArray = dashboard});
      // console.log('changed');
  }
  onAddDashboard() {
  this.dashboardService.addDashboard.next();
  }


  onDashboardSelected(dashboard: Dashboard, id: number) {
    this.dashboardService.dashboardSelected.next(dashboard);
    // console.log(dashboard);
  }
}
