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

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardForm = new FormGroup({
      dashName: new FormControl(null)
    });

  }

  onFormSubmit() {
    this.dashboardAdded = true;
    this.dashboardService.createDashboard(this.dashboardForm.value);
    // console.log(this.dashboardService.getArray());

    this.dashboardForm.reset();
  }

  onCancel() {
    this.dashboardForm.reset();
    this.dashboardService.addDashboard.next();
  }

}
