import { DashboardItem } from './dashboard-item/dashboard-item.model';

export class Dashboard {
  public name?: string;
  public user_id: number;
  public items?: DashboardItem[];

  constructor(name: string, user_id: number, items?: []) {
    this.name = name;
    this.user_id = user_id;
    this.items = items;
  }
}
