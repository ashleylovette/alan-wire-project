import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard-form',
  templateUrl: './dashboard-form.component.html',
  styleUrls: ['./dashboard-form.component.css']
})
export class DashboardFormComponent implements OnInit {
  dashboardForm: FormGroup;
  dashboardAdded: boolean = false;
  isEditMode: boolean = false;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardForm = new FormGroup({
      dashName: new FormControl(null)
    });
    this.isEditMode = this.dashboardService.editMode;
    // console.log(this.isEditMode)
  }

  onFormSubmit() {
    this.dashboardAdded = true;

    if(!this.isEditMode) {
      const dashName = this.dashboardForm.get('dashName').value;
      console.log('submitName', dashName)
      this.dashboardService.createDashboard(dashName);
    } else if (this.isEditMode) {
      const dashName = this.dashboardForm.get('dashName').value;
      this.dashboardService.updateDashboard(dashName);
      this.dashboardService.dashboards = [];
    } else {
      return
    }

    this.dashboardForm.reset();
  }

  onCancel() {
    this.dashboardForm.reset();
    this.dashboardService.addDashboard.next();
    this.dashboardService.editMode = false;
  }

}
