import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}

  handleLeftClick(event) {
    this.showLeftColumn = event;
  }
  handleRightClick(event) {
    this.showRightColumn = event;
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
