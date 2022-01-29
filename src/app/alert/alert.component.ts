import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  onCloseMsg() {
    this.dashboardService.messageCleared.emit();
  }
}
