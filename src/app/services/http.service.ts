import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Dashboard } from "../main-grid/dashboard.model";

@Injectable({providedIn: 'root'})
export class HTTPService {

  constructor(private http: HttpClient) {}


  // Custom Dashboard Requests
  createCustomDashboard(name: string) {
    const dashData: Dashboard = {name: name}
    this.http.post<{ name: string }>(
      'http://localhost:3000/api/v1/custom_dashboard',
      dashData
    )
    .subscribe(resData => {
      console.log(resData)
    });
  }


  // Dashboard Item Requests



  //Salesman Requests?

}
