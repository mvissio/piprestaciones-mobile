import { Injectable } from '@angular/core';
import {SQLiteObject} from "@ionic-native/sqlite";
import { TableCssMainProvider, TableButtonMenuProvider} from './db-tables/db-index.provider';


@Injectable()
export class DbConnectProvider {
  db: SQLiteObject = null;

  constructor(public tableCssMainProv:TableCssMainProvider,
              public tableMenuButtonProv:TableButtonMenuProvider) {
  }

  public setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  public createTables(){
    this.tableCssMainProv.createTableCssMenu();
    this.tableMenuButtonProv.createTableMenuButton();
  }

  public getDB(){
    return this.db;
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

  create(task: any){
    let sql = 'INSERT INTO tasks(title, completed) VALUES(?,?)';
    return this.db.executeSql(sql, [task.title, task.completed]);
  }

  update(task: any){
    let sql = 'UPDATE tasks SET title=?, completed=? WHERE id=?';
    return this.db.executeSql(sql, [task.title, task.completed, task.id]);
  }

  delete(task: any){
    let sql = 'DELETE FROM tasks WHERE id=?';
    return this.db.executeSql(sql, [task.id]);
  }
}
