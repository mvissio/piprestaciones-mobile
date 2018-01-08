import {Page} from "ionic-angular/umd/navigation/nav-util";

export class MenuOptionsModel {
  public id?: string;
  public titleMenu: string;
  public status: boolean;
  public type: string;
  public page: Page;
  public order: number;
  public icon?: string;


  constructor() {
  }
}
