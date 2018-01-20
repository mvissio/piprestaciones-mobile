import {Injectable} from '@angular/core';
import {DbConnectProvider} from "../../db-connect.provider";
import {RespondButtonsRestInterface} from "../../../../interface/index.interface";
import {Platform} from "ionic-angular";
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";


@Injectable()
export class TableButtonMenuProvider {
  nameTable: string = "menuButton";

  constructor() {
  }

  public createTableMenuButton(db:SQLiteObject) {
    return new Promise((resolve, reject)=>{
      let sql: string = `CREATE TABLE IF NOT EXISTS ` + this.nameTable + `(
                     idMenu INTEGER PRIMARY KEY,
                     titleMenu TEXT NOT NULL,
                     statusMenu INTEGER NOT NULL,
                     typeMenu TEXT NOT NULL,
                     orderMenu INTEGER NOT NULL,
                     iconMenu TEXT,
                     idCssMain INTEGER);`;
      console.log("createTableMenuButton2");

      db.executeSql(sql, [])
        .then((data)=>{
          resolve(data);
        }, (error)=>{
          reject(error);
        });
    });
  }

  // public create(menuButton: RespondButtonsRestInterface) {
  //   let sql = `INSERT INTO ` + this.nameTable + `
  //                           (menuId, titleMenu, status, type, order, icon)
  //                            VALUES(?,?,?,?,?)`;
  //   return this.dbConnectProvider.getDB()
  //     .executeSql(sql, [menuButton.MenuId, menuButton.TitleMenu, menuButton.Status, menuButton.Type, menuButton.Order,menuButton.Icon]);
  // }
  //
  // getAllMenuButton(menuId:number) {
  //   let sql = `SELECT * FROM ` + this.nameTable+ ` WHERE cssMenuId= ?`;
  //   return this.dbConnectProvider.getDB().executeSql(sql, [menuId])
  //     .then(response => {
  //       let cssReponseList = [];
  //       for (let index = 0; index < response.rows.length; index++) {
  //         cssReponseList.push(response.rows.item(index));
  //       }
  //       return Promise.resolve(cssReponseList);
  //     })
  //     .catch(error => Promise.reject(error));
  // }
}
