import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DashboardItemService } from '../services/dashboard-item.service';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent implements OnInit {
  @Output() leftClick = new EventEmitter();
  @Output() rightClick = new EventEmitter();


  leftOpen = true;
  leftChevron: string = 'chevron_left';
  rightOpen = true;
  rightChevron: string = 'chevron_right';

  constructor(private dashboardService: DashboardService,
              private dashItemService: DashboardItemService) {}

  ngOnInit(): void {}

  leftToggle() {
    this.leftOpen = !this.leftOpen;
    this.leftClick.emit(this.leftOpen)
    this.leftChevron = (this.leftChevron === 'chevron_right') ? 'chevron_left' : 'chevron_right';
    // this.dashboardService.refreshDashboards();
  }

  rightToggle() {
    this.rightOpen = !this.rightOpen
    this.rightClick.emit(this.rightOpen)
    this.rightChevron = (this.rightChevron === 'chevron_right') ? 'chevron_left' : 'chevron_right';
    this.dashItemService.refreshDashItems();
  }

}
