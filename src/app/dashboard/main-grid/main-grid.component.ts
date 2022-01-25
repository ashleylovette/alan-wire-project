import { DashboardService } from '../../services/dashboard.service';
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
  index: number;
  selectDashboard = new Subscription;

  constructor(private dashboardService: DashboardService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Get selected dashboard on init

    this.route.params
    .subscribe((params: Params)=> {
      debugger
      this.index = +params['id'];
      this.selectedDashboard = this.dashboardService.getDashboard(this.index);
      this.dashBoardItems = this.selectedDashboard.items;
    })

  }

  ngOnDestroy() {
    this.selectDashboard.unsubscribe();
  }

}
