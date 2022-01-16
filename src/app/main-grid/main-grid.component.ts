import { DashboardService } from '../services/dashboard.service';
import { DashboardItem } from './dashboard-item/dashboard-item.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {
  dashBoardItems: DashboardItem[];
  name: string;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    // Get dashboard items on init
    this.dashBoardItems = this.dashboardService.getDashboard();
  }

}
