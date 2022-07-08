import { DashboardItem } from './dashboard-item/dashboard-item.model';

export class Dashboard {
  public name: string;
  public items?: DashboardItem[];

  constructor(name: string, user_id: number, items?: []) {
    this.name = name;
    this.items = items;
  }
}
