import { Component, Input, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { DashboardItem } from './dashboard-item.model';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css'],
})
export class DashboardItemComponent implements OnInit {
  // Input data from main-grid.component.html
    @Input() dbItem: DashboardItem;
    @Input() index: number;

  constructor(private dashService: DashboardService) {}

  ngOnInit() {
  }

  onDelete() {
    this.dashService.deleteDashItem(this.index);
  }
}
