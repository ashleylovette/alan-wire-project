import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'alan-wire-project';
  addDashboard: boolean = false;
  dashboardSelected = false;

constructor(private dashboardService: DashboardService) {}

ngOnInit(): void {
  this.dashboardService.addDashboard.subscribe(() => {
    this.addDashboard = !this.addDashboard;
  });

  this.dashboardService.dashboardSelected.subscribe(dashboard => {
    this.dashboardSelected = true;
  })
}
}
