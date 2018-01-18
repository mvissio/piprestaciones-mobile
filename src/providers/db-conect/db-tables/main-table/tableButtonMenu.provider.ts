import {Injectable} from '@angular/core';
import {DbConnectProvider} from "../../db-connect.provider";
import {RespondButtonsRestInterface} from "../../../../interface/index.interface";


@Injectable()
export class TableButtonMenuProvider {
  nameTable: string = "menuButton";

  constructor(public dbConnectProvider: DbConnectProvider) {
  }

  public createTableMenuButton() {
    let sql: string = `CREATE TABLE IF NOT EXISTS ` + this.nameTable + `(
                     menuId INTEGER PRIMARY KEY,
                     titleMenu TEXT NOT NULL,
                     status NUMBER NOT NULL,
                     type TEXT NOT NULL,
                     order NUMBER NOT NULL,
                     icon TEXT );`;

    return this.dbConnectProvider.getDB()
      .executeSql(sql, []);
  }

  public create(menuButton: RespondButtonsRestInterface) {
    let sql = `INSERT INTO ` + this.nameTable + `
                            (menuId, titleMenu, status, type, order, icon)
                             VALUES(?,?,?,?,?)`;
    return this.dbConnectProvider.getDB()
      .executeSql(sql, [menuButton.MenuId, menuButton.TitleMenu, menuButton.Status, menuButton.Type, menuButton.Order,menuButton.Icon]);
  }

  getAllMenuButton(menuId:number) {
    let sql = `SELECT * FROM ` + this.nameTable+ ` WHERE cssMenuId= ?`;
    return this.dbConnectProvider.getDB().executeSql(sql, [menuId])
      .then(response => {
        let cssReponseList = [];
        for (let index = 0; index < response.rows.length; index++) {
          cssReponseList.push(response.rows.item(index));
        }
        return Promise.resolve(cssReponseList);
      })
      .catch(error => Promise.reject(error));
  }
}
