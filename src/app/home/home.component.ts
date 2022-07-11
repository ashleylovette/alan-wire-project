import { Component, OnInit } from '@angular/core';
import { DashboardItemService } from '../services/dashboard-item.service';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'alan-wire-project';
  addDashboard: boolean = false;
  dashboardSelected = false;
  showLeftColumn = true;
  showRightColumn = true;

  constructor(private dashboardService: DashboardService,
              private dashItemService: DashboardItemService) {}

  ngOnInit(): void {
    this.dashboardService.addDashboard.subscribe(() => {
      this.addDashboard = !this.addDashboard;
    });

    this.dashboardService.dashboardSelected.subscribe(() => {
      this.dashboardSelected = true;
    })
  }

  handleLeftClick(event) {
    this.showLeftColumn = event;
    this.dashboardService.refreshDashboards;
  }
  handleRightClick(event) {
    this.showRightColumn = event;
    this.dashItemService.refreshDashItems;
  }

  // constructor(private dashboardService: DashboardService) {}

  // ngOnInit(): void {
  //   this.dashboardService.addDashboard.subscribe(() => {
  //     this.addDashboard = !this.addDashboard;
  //   });

  //   this.dashboardService.dashboardSelected.subscribe(() => {
  //     this.dashboardSelected = true;
  //   })
  // }

}
