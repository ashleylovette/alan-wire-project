import { Component, Input, OnInit } from '@angular/core';
import { DashboardItem } from '../main-grid/dashboard-item/dashboard-item.model';
import { DashboardItemService } from '../services/dashboard-item.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {
  dashboardItems: DashboardItem[];
  @Input() item: DashboardItem;
  @Input() index: number;

  constructor(private dashItemsService: DashboardItemService) { }

  ngOnInit() {
    this.dashboardItems = this.dashItemsService.getDashItems();
    console.log(this.dashboardItems);
  }

}
