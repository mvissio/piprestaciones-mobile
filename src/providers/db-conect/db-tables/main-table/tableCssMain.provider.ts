import {Injectable} from '@angular/core';
import {DbConnectProvider} from "../../db-connect.provider";
import {CssResponseInterface} from "../../../../interface/main/cssResponse.interface";
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {RespondButtonsRestInterface} from "../../../../interface/index.interface";


@Injectable()
export class TableCssMainProvider extends DbConnectProvider{
  nameTable: string = "cssMenu";
  sqlInsertCssmain: string = `INSERT INTO
                            cssMenu(idCssMenu, borderSizeCssMenu, colorBackCssMenu, colorTextCssMenu, fontFamilyCssMenu, imageBackCssMenu)
                            VALUES(?,?,?,?,?,?)`;
  sqlCreateCssmain: string = `CREATE TABLE IF NOT EXISTS
                            cssMenu(idCssMenu INTEGER PRIMARY KEY,
                            borderSizeCssMenu TEXT,
                            colorBackCssMenu TEXT NOT NULL,
                            colorTextCssMenu TEXT NOT NULL,
                            fontFamilyCssMenu TEXT NOT NULL,
                            imageBackCssMenu TEXT NOT NULL);`;

  public createTableCssMenu() {
    return new Promise((resolve, reject) => {
      let sql: string = `CREATE TABLE IF NOT EXISTS ` + this.nameTable + `(
                     idCssMenu INTEGER PRIMARY KEY,
                     borderSizeCssMenu TEXT,
                     colorBackCssMenu TEXT NOT NULL,
                     colorTextCssMenu TEXT NOT NULL,
                     fontFamilyCssMenu TEXT NOT NULL,
                     imageBackCssMenu TEXT NOT NULL);`;
      console.log("createTableCssMenu sql");

      this.db.executeSql(sql, [])
        .then((data) => {
          console.log("createTableCssMenu data");
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  insertCssMain(cssMain: CssResponseInterface) {
    return new Promise((resolve, reject) => {
      console.log("insertando");

      this.db.executeSql(this.sqlInsertCssmain,
        [cssMain.CssMenuId,
          cssMain.BorderSize,
          cssMain.ColorBack,
          cssMain.ColorText,
          cssMain.FontFamily,
          cssMain.ImageBack])
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  updateCssMain(db: SQLiteObject, cssMain: CssResponseInterface) {
    return new Promise((resolve, reject) => {
      let sql = `UPDATE ` + this.nameTable + ` 
               SET borderSizeCssMenu=?, colorBackCssMenu=?, colorTextCssMenu=?,fontFamilyCssMenu=?, imageBackCssMenu=?
               WHERE idCssMenu=?`;
      db
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
    return this.db.executeSql(sql, [])
      .then(response => {
        let listButton: RespondButtonsRestInterface[] = [];
        for (let index = 0; index < response.rows.length; index++) {
          listButton.push(response.rows.item(index));
          console.log("insertado");
        }
        return Promise.resolve(listButton);
      });
  }

  getCSsButtonById(cssButtonId: number) {
    let sql = ` SELECT * 
                FROM ` + this.nameTable +
      ` WHERE idCssMenu=?`;
    return this.db.executeSql(sql, [cssButtonId])
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
