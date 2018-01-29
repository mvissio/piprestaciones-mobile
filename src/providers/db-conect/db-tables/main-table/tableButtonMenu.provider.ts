import {Injectable} from '@angular/core';
import {DbConnectProvider} from "../../db-connect.provider";
import {RespondButtonsRestInterface} from "../../../../interface/index.interface";
import {Platform} from "ionic-angular";
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";


@Injectable()
export class TableButtonMenuProvider {
  nameTable: string = "menuButton";
  dbButtonMain: SQLiteObject = null;

  constructor() {
  }

  public createTableMenuButton(db: SQLiteObject) {
    this.dbButtonMain = db;
    return new Promise((resolve, reject) => {
      let sql: string = `CREATE TABLE IF NOT EXISTS ` + this.nameTable + `(
                     idMenu INTEGER PRIMARY KEY,
                     titleMenu TEXT NOT NULL,
                     statusMenu INTEGER NOT NULL,
                     typeMenu TEXT NOT NULL,
                     orderMenu INTEGER NOT NULL,
                     iconMenu TEXT,
                     idCssMain INTEGER);`;
      this.dbButtonMain.executeSql(sql, [])
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  public insertMenuButton(db: SQLiteObject, menuButton: RespondButtonsRestInterface) {
    return new Promise((resolve, reject)=>{
      let sql = `INSERT INTO ` + this.nameTable +
        `(idMenu, titleMenu, statusMenu, typeMenu, orderMenu, iconMenu, idCssMain)
                          VALUES(?,?,?,?,?,?,?)`;
      console.log("insertMenuButton");
      console.log(this.dbButtonMain);
      return db
        .executeSql(sql, [menuButton.MenuId,
          menuButton.TitleMenu,
          menuButton.Status,
          menuButton.Type,
          menuButton.Order,
          menuButton.Icon,
          menuButton.CssModelMenu.CssMenuId])
        .then((data)=>{
          console.log("insertado button");
          resolve(data);
        }).catch((error)=>{
          console.log("error insertado button");
          reject(error);
        });
    });
  }

  getAllMenuButton() {
    let sql = `SELECT * FROM ` + this.nameTable;
    return this.dbButtonMain.executeSql(sql, [])
      .then(response => {
        let cssReponseList:any[] = [];
        for (let index = 0; index < response.rows.length; index++) {
          cssReponseList.push(response.rows.item(index));
        }
        return Promise.resolve(cssReponseList);
      })
      .catch(error => Promise.reject(error));
  }
}
