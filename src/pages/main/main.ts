import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {DbConnectProvider} from "../../providers/db-conect/db-connect.provider";
import {MenuOptionsModel} from "../../model/menuOptions.model";
import {AgendaPage,ProgramPage, MapPage, StaticPage} from "../index.paginas";
import {MainProvider} from "../../providers/main/main";
import {Page} from "ionic-angular/umd/navigation/nav-util";


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {


  constructor(public navCtrl: NavController, private mainProvider: MainProvider, private dbConectService: DbConnectProvider) {
  }

  insertData() {
    this.dbConectService.create("test")
      .catch(error => {
          console.error(error);
        }
      );
  }

  changePage(type: string) {
    let pageSelect: Page;
    switch (type) {
      case "programa":
        pageSelect= ProgramPage;
        break;
      case "maps":
        pageSelect= MapPage;
        break;
      case "agenda":
        pageSelect= AgendaPage;
        break;
      default:
        pageSelect= StaticPage;
        break;
    }
    this.navCtrl.push(pageSelect);
  }
}
