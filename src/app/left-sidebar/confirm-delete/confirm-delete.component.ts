import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {
  @Input() index: number;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onCancel() {
    this.dashboardService.cancelDelete.emit();
  }

  onDeleteDash() {
    this.dashboardService.deleteDashboard(this.index);
    this.dashboardService.dashboardDeleted.emit();
  }
}
