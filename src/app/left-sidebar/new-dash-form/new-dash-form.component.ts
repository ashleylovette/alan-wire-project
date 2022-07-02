import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from ''

@Component({
  selector: 'app-new-dash-form',
  templateUrl: './new-dash-form.component.html',
  styleUrls: ['./new-dash-form.component.css']
})
export class NewDashFormComponent implements OnInit {
  dashboardForm: FormGroup

  constructor(private fb: FormBuilder
              private dbService: DashboardService) {
  }

  ngOnInit(): void {
    this.formInit()
  }

  submitDashboard() {

  }

  private formInit() {
    this.dashboardForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

}


