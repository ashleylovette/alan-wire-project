import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit() {
  }
}
