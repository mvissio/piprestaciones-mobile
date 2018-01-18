import {Injectable} from '@angular/core';
import {DbConnectProvider} from "../../db-connect.provider";
import {CssResponseInterface} from "../../../../interface/main/cssResponse.interface";


@Injectable()
export class TableCssMainProvider {
  nameTable: string = "cssMenu";

  constructor(public dbConnectProvider: DbConnectProvider) {
  }

  public createTableCssMenu() {
    let sql: string = `CREATE TABLE IF NOT EXISTS ` + this.nameTable + `(
                     cssMenuId INTEGER PRIMARY KEY,
                     borderSize TEXT,
                     colorBack TEXT NOT NULL,
                     colorText TEXT NOT NULL,
                     fontFamily TEXT NOT NULL,
                     imageBack TEXT NOT NULL);`;

    return this.dbConnectProvider.getDB()
      .executeSql(sql, []);
  }

  public create(cssReponse: CssResponseInterface) {
    let sql = `INSERT INTO ` + this.nameTable + `
                            (cssMenuId,borderSize, colorBack, colorText, fontFamily, imageBack)
                             VALUES(?,?,?,?,?)`;
    return this.dbConnectProvider.getDB()
      .executeSql(sql, [cssReponse.cssResponseId, cssReponse.BorderSize, cssReponse.ColorBack, cssReponse.ColorText, cssReponse.FontFamily, cssReponse.ImageBack]);
  }

  getAllCssMenu() {
    let sql = `SELECT * FROM ` + this.nameTable + ` WHERE cssMenuId= ?`;
    return this.dbConnectProvider.getDB().executeSql(sql, [])
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
