import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SQLiteObject} from "@ionic-native/sqlite";

/*
  Generated class for the DbConectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbConectProvider {
  db: SQLiteObject = null;

  constructor() {}

  createTable(sql:string){
    sql = 'CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER)';
    return this.db.executeSql(sql, []);
  }

  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  getAll(){
    let sql = 'SELECT * FROM tasks';
    return this.db.executeSql(sql, [])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push( response.rows.item(index) );
        }
        return Promise.resolve( tasks );
      })
      .catch(error => Promise.reject(error));
  }


}
