import { DashboardService } from '../services/dashboard.service';
import { DashboardItem } from './dashboard-item/dashboard-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dashboard } from './dashboard.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css'],
})
export class MainGridComponent implements OnInit {
  dashBoardItems: DashboardItem[];
  name: string;
  selectedDashboard: Dashboard;
  @Input() id: number;
  selectDashboardSub = new Subscription();
  dashboardClearedSub = new Subscription();
  dashboardSelected: boolean = false;
  selectDashboard = new Subscription();
  exit: boolean = false;
  dashboardItems: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    // Get selected dashboard on init

    this.selectDashboardSub = this.dashboardService.dashboardSelected.subscribe(
      (dashboard: Dashboard) => {
        this.selectedDashboard = dashboard;
        this.dashBoardItems = dashboard.items;
        this.dashboardSelected = true;
        console.log('selected dashboard', this.selectedDashboard)
      }
    );

    this.dashboardService.dashboardCleared.subscribe(() => {
      this.dashboardSelected = false;
    });

    this.selectDashboard = this.dashboardService.dashboardSelected.subscribe(
      (dashboard: Dashboard) => {
        this.selectedDashboard = dashboard;
        this.dashBoardItems = dashboard.items;
      }
    );

    this.dashboardService.dashboardDeleted.subscribe(() => {
      this.dashboardSelected = false;
    });

    // getting total numbers for sales and qty by region, this will probably need to be revisited when we get live data
    this.dashboardItems = this.dashboardService.getDashboardItems();
    this.dashboardItems.map(x => {
      if(x.salesman.length > 1) {
        x.salesman.map(x => {
          this.dashboardService.totalSalesArray.push(x.dollar_amount_sold * x.qty_wire)
        })
      }
    })

    this.dashboardItems.map(x => {
      if(x.salesman.length > 1) {
        x.salesman.map(x => {
          this.dashboardService.totalQtyArray.push(x.qty_wire)
        })
      }
    })
  }

  ngOnDestroy() {
    this.selectDashboardSub.unsubscribe();
    this.dashboardClearedSub.unsubscribe();
  }

  onExitPage() {
    this.exit = true;
  }

}
