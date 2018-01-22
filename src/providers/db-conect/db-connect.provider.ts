import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {TableCssMainProvider, TableButtonMenuProvider} from './db-tables/db-index.provider';
import {Platform} from "ionic-angular";
import {CssResponseInterface} from "../../interface/main/cssResponse.interface";


@Injectable()
export class DbConnectProvider {
  db: SQLiteObject = null;
  isOpen: boolean=false;

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
    }else{
      console.log("No Problem");
    }
  }

  public createTables() {
      return Promise.all([/*this.tableMenuButtonProv.createTableMenuButton(this.db),
                                 */this.tableCssMainProv.createTableCssMenu()]);
  }

  public finDb(){
    return this.db;
  }
}
