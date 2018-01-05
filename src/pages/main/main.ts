import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {DbConectProvider} from "../../providers/db-conect/db-conect";

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  tasks: any[] = [];

  constructor(public navCtrl: NavController,  private dbConectService:DbConectProvider ) {
    this.tasks.push({'title':'test', 'completed':true});
    this.insertData();
    this.insertData();
  }

  getAllTasks(){
    this.dbConectService.getAll()
      .then(tasks => {
        this.tasks = tasks;
      })
      .catch( error => {
        console.error( error );
      });
  }

  insertData(){
    this.dbConectService.create("test")
      .catch(error=>{
          console.error(error);
          }
    );
  }
}
