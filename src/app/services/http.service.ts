import { registerLocaleData } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { Dashboard } from "../main-grid/dashboard.model";

@Injectable({providedIn: 'root'})
export class HTTPService {
  testUrl = 'http://localhost:3000/api/v1/'

  constructor(private http: HttpClient) {}


  // Custom Dashboard Requests
    // create
  createCustomDashboard(name: string) {
    const dashData: Dashboard = {name: name}
    this.http.post<{ name: string }>(
      this.testUrl + 'custom_dashboards',
      dashData
    )
    .subscribe(resData => {
      console.log(resData)
    });
  }
    //read
  getCustomDashboards() {
    this.http.get<{ [key: string]: Dashboard }>(
      this.testUrl + 'index'
    )
    .pipe(
      map(resData => {
        const dashArray: Dashboard [] = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            dashArray.push({...resData[key], name: key });
          }
        }
        return dashArray;
      })
    )
  }

    //update


    //destroy




  // Dashboard Item Requests



  //Salesman Requests?

}
