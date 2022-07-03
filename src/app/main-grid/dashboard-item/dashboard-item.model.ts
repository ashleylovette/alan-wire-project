import { Salesman } from "./salesman.model";

export class DashboardItem {
  public name: string;
  public size: number;
  public display_type: number;
  public salesman: Salesman [];

  constructor(name: string, size: number, display_type: number) {
    this.name = name;
    this.size = size;
    this.display_type = display_type;
  }

}
