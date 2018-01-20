import {Injectable} from '@angular/core';
import {DbConnectProvider} from "../../db-connect.provider";
import {CssResponseInterface} from "../../../../interface/main/cssResponse.interface";
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";


@Injectable()
export class TableCssMainProvider {
  nameTable: string = "cssMenu";
  dbCss: SQLiteObject = null;

  constructor() {
  }

  public createTableCssMenu(db: SQLiteObject) {
    this.dbCss = db;
    return new Promise((resolve, reject) => {
      let sql: string = `CREATE TABLE IF NOT EXISTS ` + this.nameTable + `(
                     idCssMenu INTEGER PRIMARY KEY,
                     borderSizeCssMenu TEXT,
                     colorBackCssMenu TEXT NOT NULL,
                     colorTextCssMenu TEXT NOT NULL,
                     fontFamilyCssMenu TEXT NOT NULL,
                     imageBackCssMenu TEXT NOT NULL);`;

      this.dbCss.executeSql(sql, [])
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  insertCssMain(cssMain: CssResponseInterface) {
    let sql = `INSERT INTO ` + this.nameTable + ` 
               (idCssMenu, borderSizeCssMenu, colorBackCssMenu, colorTextCssMenu, fontFamilyCssMenu, imageBackCssMenu)
               VALUES(?,?,?,?,?,?)`;
    return new Promise((resolve, reject) => {
      this.dbCss.executeSql(sql, [cssMain.BorderSize, cssMain.ColorBack, cssMain.ColorText, cssMain.FontFamily, cssMain.ImageBack, cssMain.CssMenuId])
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  updateCssMain(cssMain: CssResponseInterface) {
    return new Promise((resolve, reject) => {
      let sql = `UPDATE ` + this.nameTable + ` 
               SET borderSizeCssMenu=?, colorBackCssMenu=?, colorTextCssMenu=?,fontFamilyCssMenu=?, imageBackCssMenu=?
               WHERE idCssMenu=?`;
      this.dbCss
        .executeSql(sql, [cssMain.BorderSize, cssMain.ColorBack, cssMain.ColorText, cssMain.FontFamily, cssMain.ImageBack, cssMain.CssMenuId])
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  getAllCssButtons() {
    let sql = ` SELECT * 
                FROM ` + this.nameTable;
    return this.dbCss.executeSql(sql, [])
      .then(response => {
        let listButton = [];
        for (let index = 0; index < response.rows.length; index++) {
          listButton.push(response.rows.item(index));
        }
        return Promise.resolve(listButton);
      })
      .catch(error => Promise.reject(error));
  }

  getCSsButtonById(cssButtonId: number) {
    let sql = ` SELECT * 
                FROM ` + this.nameTable +
      ` WHERE idCssMenu=?`;
    return this.dbCss.executeSql(sql, [cssButtonId])
      .then(response => {
        let listButton = [];
        for (let index = 0; index < response.rows.length; index++) {
          listButton.push(response.rows.item(index));
        }
        return Promise.resolve(listButton);
      })
      .catch(error => Promise.reject(error));
  }
}
