import { DashboardService } from '../services/dashboard.service';
import { DashboardItem } from './dashboard-item/dashboard-item.model';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {
  dashBoardItems: DashboardItem[];
  name: string;
  isOpen = false;
  @Input()toggle: any;


  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    // Get dashboard items on init
    this.dashBoardItems = this.dashboardService.getDashboard();
  }

  onToggleLeftSidebar() {
    if (this.isOpen) {
      document.getElementById('left-sidebar').style.marginRight='15%';
      document.getElementById('container-grid').style.marginLeft='15%';
    } else {
      document.getElementById('left-sidebar').style.marginRight='0';
      document.getElementById('container-grid').style.marginLeft='0';
    }
  }
}
