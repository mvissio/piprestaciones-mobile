import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {URL_PROVIDERS} from "../../config/urlProviders.config";
import {RespondButtonsRestInterface} from '../../interface/index.interface';
import {TableCssMainProvider} from "../db-conect/db-tables/db-index.provider";

@Injectable()
export class MainProvider {
  baseUrlMain: string = URL_PROVIDERS + '/Menus';

  constructor(private http: HttpClient) {
    this.conectForMenus();
  }

  buttonList: any[] = [];

  public conectForMenus() {
    let url: string = this.baseUrlMain + '/GetMenu';
    // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.get<[RespondButtonsRestInterface]>(url)
      .subscribe((dataList) => {
        console.log(dataList);
          dataList.forEach(
            (data) => this.buttonList.push(data)
          )
        },
        (error) => {
          return error;
        }
      );
  }

  public findFromDb(){

  }
}
