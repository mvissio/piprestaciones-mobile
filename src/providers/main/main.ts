import {Injectable} from '@angular/core';
import {MenuOptionsModel} from "../../model/menuOptions.model";
import {StaticPage, ProgramPage, MapPage} from "../../pages/index.paginas";
import {HttpClient} from "@angular/common/http";
import {URL_PROVIDERS} from "../../config/urlProviders.config";

@Injectable()
export class MainProvider {
  baseUrlMain: string = URL_PROVIDERS + '/Menus';

  constructor(private http: HttpClient) {
    this.conectForMenus();
  }

  buttonList: any[] = [];

  public conectForMenus() {
    let url: string = this.baseUrlMain + '/GetMenu';
    this.http.get<respondButtons[]>(url)
      .subscribe((dataList) => {
          dataList.forEach(
            (data) => this.buttonList.push(data)
          )
        },
        (error) => {
          return error;
        }
      );
  }

}

export interface respondButtons {
  id?: string;
  titleMenu: string;
  status: boolean;
  type: string;
  order: number;
  icon?: string;


}


export interface respondButtonsRest {
  MenuId?: string;
  TitleMenu: string;
  Status: boolean;
  Type: string;
  Order: number;
  Icon?: string;
  CssModelMenu: cssResponse;

}


export class cssResponse {
  BorderSize?: number;
  ColorBack: string;
  ColorText: string;
  FontFamily: string;

  constructor() {
  }
}
