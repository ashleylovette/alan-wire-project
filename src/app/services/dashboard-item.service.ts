import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DashboardItem } from '../main-grid/dashboard-item/dashboard-item.model';
import { HTTPService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardItemService {
  private dashItems: DashboardItem[] = [];
  resData: any;
  dashItemChanged = new Subject<DashboardItem[] | any>();

  constructor(private httpService: HTTPService) {}

  getDashboardItems() {
    this.dashItems = []
    this.httpService.getDashboardItems().subscribe(res => {
      this.resData = res;
      this.resData.payload.map(x => {
        const newItem = new DashboardItem(
          x.id,
          x.name,
          x.size,
          x.display_type,
          x.salesman_info
        )
        this.dashItems.push(newItem);
      })
      this.dashItemChanged.next(this.dashItems)
    })
  }

  getDashItem(index: number) {
    return this.dashItems[index];
  }

  // For Dummy data
  getDashItems() {
    return this.dashItems.slice();
  }

  getItem(index: number) {
    return this.dashItems[index];
  }

  refreshDashItems() {
    this.getDashboardItems();
  }
}
