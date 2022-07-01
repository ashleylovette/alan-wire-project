import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Dashboard } from '../main-grid/dashboard.model';
import { DashboardItem } from '../main-grid/dashboard-item/dashboard-item.model';
import { DashboardItemService } from '../services/dashboard-item.service';
import { DashboardService } from '../services/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
})
export class RightSidebarComponent implements OnInit, OnDestroy {
  dashboardItems: DashboardItem[];
  @Input() item: DashboardItem;
  @Input() index: number;
  selectedDashboard = new Subscription();

  constructor(
    private dashItemsService: DashboardItemService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.dashboardItems = this.dashboardService.getDashboardItems();
    this.selectedDashboard =
      this.dashboardService.dashboardSelected.subscribe();
  }

  addItem(itemIndex: number) {
    const dashItem = this.dashItemsService.getItem(itemIndex);
    this.dashboardService.addDashItem(dashItem);
  }

  ngOnDestroy(): void {
    this.selectedDashboard.unsubscribe();
  }
}
