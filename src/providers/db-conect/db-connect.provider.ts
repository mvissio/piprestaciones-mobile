import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {TableCssMainProvider, TableButtonMenuProvider} from './db-tables/db-index.provider';
import {Platform} from "ionic-angular";
import {CssResponseInterface} from "../../interface/main/cssResponse.interface";
import {RespondButtonsRestInterface} from "../../interface/main/respondButtonsRest.interface";


@Injectable()
export class DbConnectProvider {
  db: SQLiteObject;
  isOpen: boolean = false;

  constructor(public storage: SQLite,
              public platform: Platform,
              public tableCssMainProv: TableCssMainProvider,
              public tableMenuButtonProv: TableButtonMenuProvider) {
    if (!this.isOpen && this.platform.is("cordova")) {
      this.storage = new SQLite();
      this.storage.create({
        name: "data.db",
        location: "default"
      }).then((db: SQLiteObject) => {
        this.db = db;
        this.createTables();
        this.isOpen = true;
      }).catch((error) => {
        console.log("ERROR CREATE TABLE:" + error)
      });
    } else {
      console.log("No Problem");
    }
  }

  public createTables() {
    return Promise.all([this.tableMenuButtonProv.createTableMenuButton(this.db),
      this.tableCssMainProv.createTableCssMenu(this.db)]);
  }

  insertMenuButton(responseButtons: RespondButtonsRestInterface) {
    return Promise.all([
      this.tableMenuButtonProv.insertMenuButton(this.db, responseButtons)
    ]).catch((error)=>{
      console.log("error al insertar por -->" + error);
    })
  }

  getAllMenuButtons() {
    this.tableMenuButtonProv.getAllMenuButton().then((data) => {
      console.log("imprimiendo data");
      data.forEach((menu) => {
        console.log(menu);
      });
    }).catch((error) => {
      console.log("no se leen los datos   -->  " + error);
    })
  }
}
