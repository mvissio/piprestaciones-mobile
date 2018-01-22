import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {URL_PROVIDERS} from "../../config/urlProviders.config";
import {RespondButtonsRestInterface} from '../../interface/index.interface';
import {TableCssMainProvider} from "../db-conect/db-tables/db-index.provider";
import {Platform} from "ionic-angular";
import {DbConnectProvider} from "../db-conect/db-connect.provider";

@Injectable()
export class MainProvider {
  baseUrlMain: string = URL_PROVIDERS + '/Menus';

  constructor(private http: HttpClient,
              private platform:Platform,
              private dbConectService:DbConnectProvider) {
  }

  buttonList: RespondButtonsRestInterface[] = [];

  public conectForMenus() {
    let url: string = this.baseUrlMain + '/GetMenu';
    // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.get<[RespondButtonsRestInterface]>(url)
      .subscribe((dataList) => {
          dataList.forEach(
            (data) => {
              this.buttonList.push(data);
              this.insertData(data);
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

  public insertData(data:RespondButtonsRestInterface){
    console.log("------------ " +data);
    if (this.platform.is("cordova")) {
        console.log("Datos insertando: " + data)
        this.dbConectService.tableMenuButtonProv.insertMenuButton(data);
        console.log("Datos 1 insertado");
        this.dbConectService.tableCssMainProv.insertCssMain(data.CssModelMenu);
        console.log("Datos Insertados: " + data)
      }
      // dbConectService.tableCssMainProv.getCSsButtonById(mainProvider.buttonList[1].CssModelMenu.CssMenuId).then((data) => {

      //   dbConectService.createTables().then((data)=>{
      //     console.log("createTables finish");
      //     // this.dbConectService.insertCssMenu(mainProvider.buttonList[1].CssModelMenu);
      //   }).catch((error)=>{
      //     console.log("createTables error")
      //   });
    }
}
