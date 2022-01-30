import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Dashboard } from '../main-grid/dashboard.model';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onCancel() {
    this.dashboardService.dashboardCleared.emit();
  }

  onDeleteDash() {
    this.dashboardService.deleteDash.next(Dashboard);
    this.dashboardService.dashboardCleared.emit();
  }
}
