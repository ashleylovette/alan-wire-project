export class DashboardItem {
  public name: string;
  public size: number;
  public imgPath?: string;

  constructor(name: string, size: number, imgPath?: string) {
    this.name = name;
    this.size = size;
    this.imgPath = imgPath;
  }

}
