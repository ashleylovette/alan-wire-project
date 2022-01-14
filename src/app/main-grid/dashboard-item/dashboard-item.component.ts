import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css'],
})
export class DashboardItemComponent implements OnInit {
  itemName: string;
  imgPath: string;

  constructor(dashboardService: DashboardService) {}

  ngOnInit(): void {}
}
