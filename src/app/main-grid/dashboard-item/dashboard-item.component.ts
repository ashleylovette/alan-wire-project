import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream

@Component({
  selector: 'app-dashboard-item',
  templateUrl: '.main-grid/dashboard-item/dashboard-item.component.html',
  styleUrls: '.main-grid/dashboard-item/dashboard-item.component.css',
})
export class DashboardItemComponent implements OnInit {
  constructor() {}
=======
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
>>>>>>> Stashed changes

  ngOnInit(): void {}
}
