export class DashboardItem {
  public name: string;
  public size: string;
  public imgPath?: string;

  constructor(name: string, size: string, imgPath?: string) {
    this.name = name;
    this.size = size;
    this.imgPath = imgPath;
  }

}
