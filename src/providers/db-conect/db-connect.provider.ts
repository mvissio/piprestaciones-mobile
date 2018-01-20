import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {TableCssMainProvider, TableButtonMenuProvider} from './db-tables/db-index.provider';
import {Platform} from "ionic-angular";


@Injectable()
export class DbConnectProvider {
  db: SQLiteObject = null;
  isOpen: boolean;

  constructor(public storage: SQLite,
              public platform: Platform,
              public tableCssMainProv: TableCssMainProvider,
              public tableMenuButtonProv: TableButtonMenuProvider) {
    if (!this.isOpen && platform.is("cordova")) {
      this.storage = new SQLite();
      this.storage.create({
        name: "data.db",
        location: "default"
      }).then((db: SQLiteObject) => {
        this.db = db;
        this.isOpen = true;
        this.createTables();
      }).catch((error) => {
        console.log("ERROR CREATE TABLE:" + error)
      });
    }
  }

  public createTables() {
    Promise.all([
      this.tableCssMainProv.createTableCssMenu(this.db),
      this.tableMenuButtonProv.createTableMenuButton(this.db)
    ]).then((data) => {
      console.log(this.tableMenuButtonProv.nameTable + " y " + this.tableCssMainProv.nameTable);
    }).catch((error) => {
        console.log("ERROR TABLE DATA:" + error);
      }
    );
  }

  public getDB() {
    return this.db;
  }
}
