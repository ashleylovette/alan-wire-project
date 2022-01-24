import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashArray = this.dashboardService.getArray();
    // this.dashboardService.dashboardSelected.subscribe((dashboard: Dashboard[]) => {
    //   this.dashArray = dashboard;
    // });
  }
  onAddDashboard() {
  this.dashboardService.addDashboard.next();
  }
}
