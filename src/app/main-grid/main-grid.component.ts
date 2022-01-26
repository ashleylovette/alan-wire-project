import { DashboardService } from '../services/dashboard.service';
import { DashboardItem } from './dashboard-item/dashboard-item.model';
import { Component, Input, OnInit } from '@angular/core';
import { Dashboard } from './dashboard.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {
  dashBoardItems: DashboardItem[];
  name: string;
  selectedDashboard: Dashboard;
  @Input() id: number;
  selectDashboard = new Subscription;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    // Get selected dashboard on init
    this.selectDashboard = this.dashboardService.dashboardSelected.subscribe((dashboard: Dashboard) => {
      this.selectedDashboard = dashboard;
      this.dashBoardItems = dashboard.items;
    });

  }

  ngOnDestroy() {
    this.selectDashboard.unsubscribe();
  }

}
