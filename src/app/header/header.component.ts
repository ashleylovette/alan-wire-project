import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Dashboard } from '../main-grid/dashboard.model';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  pageTitle: String = 'Alan Wire';
  dashboard: Dashboard;

  @Output()exitPage = new EventEmitter<any>();

  constructor( private dashboardService: DashboardService, private authService: AuthService) {
  }

  ngOnInit() {
    this.dashboardService.dashboardSelected.subscribe((dashboard: Dashboard) => {
      this.pageTitle = dashboard.name;
    });
    this.dashboardService.dashboardDeleted.subscribe(() => {
      this.pageTitle = 'Alan Wire';
    })
  }

  onHome() {
    this.dashboardService.dashboardCleared.emit();
    this.pageTitle = 'Alan Wire';
    this.dashboard = null;
  }

  onExit() {
    this.exitPage.emit();
  }

  logout() {
    this.authService.logout();
  }
}
