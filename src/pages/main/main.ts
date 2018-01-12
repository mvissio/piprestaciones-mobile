import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {DbConectProvider} from "../../providers/db-conect/db-conect";
import {MenuOptionsModel} from "../../model/menuOptions.model";
import {ProgramPage, MapPage, StaticPage} from "../index.paginas";
import {MainProvider} from "../../providers/main/main";


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  buttonsArray: MenuOptionsModel[] = [];

  constructor(public navCtrl: NavController, private mainProvider: MainProvider, private dbConectService: DbConectProvider) {
    this.buttonsArray = mainProvider.findButtons();
  }
  
  insertData() {
    this.dbConectService.create("test")
      .catch(error => {
          console.error(error);
        }
      );
  }

  changePage(button: MenuOptionsModel) {
    this.navCtrl.push(button.page);
  }
}
