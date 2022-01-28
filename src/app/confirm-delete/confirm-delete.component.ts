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
  @Input()confirmMsg: string;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onCancel() {
    this.dashboardService.cancelDelete.next(true);
  }

  onDeleteDash() {
    this.dashboardService.deleteDash.next(Dashboard);
  }
}
