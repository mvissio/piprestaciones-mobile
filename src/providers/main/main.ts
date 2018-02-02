import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {URL_PROVIDERS} from "../../config/urlProviders.config";
import {RespondButtonsRestInterface} from '../../interface/index.interface';
import {TableCssMainProvider} from "../db-conect/db-tables/db-index.provider";
import {Platform} from "ionic-angular";
import {DbConnectProvider} from "../db-conect/db-connect.provider";
import marked from 'marked';

@Injectable()
export class MainProvider {
  baseUrlMain: string = URL_PROVIDERS + '/Menus';

  constructor(private http: HttpClient,
              private platform: Platform,
              private dbConectService: DbConnectProvider) {
  }

  buttonList: RespondButtonsRestInterface[] = [];

  public conectForMenus() {
    let url: string = this.baseUrlMain + '/GetMenu';
    // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.get<[RespondButtonsRestInterface]>(url)
      .subscribe((dataList) => {
          dataList.forEach(
            (data) => {
              data.TitleMenu = marked(data.TitleMenu);
              this.buttonList.push(data);
              // if (this.platform.is("cordova")) {
              //   this.insertData(data);
              // }
            }
          );
          console.log(dataList);
          return Promise.resolve(dataList);
        },
        (error) => {
          console.log(error);
          return Promise.reject(error);
        }
      );
  }

  public insertData(data: RespondButtonsRestInterface) {
    console.log("Datos insertando: " + data);
    this.dbConectService.insertMenuButton(data);
    console.log("Datos insertando: " + data);

    this.dbConectService.getAllMenuButtons();
  }
}
