import {Component} from '@angular/core';
import {IonicPage, NavController, Platform} from 'ionic-angular';
import {DbConnectProvider} from "../../providers/db-conect/db-connect.provider";
import {MenuOptionsModel} from "../../model/menuOptions.model";
import {SpeackerPage, ProgramPage, MapPage, StaticPage} from "../index.paginas";
import {MainProvider} from "../../providers/main/main";
import {Page} from "ionic-angular/umd/navigation/nav-util";
import {SpeackerListPage} from "../speacker-list/speacker-list";


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController,
              public mainProvider: MainProvider) {

    Promise.resolve(mainProvider.conectForMenus()).then((data)=>{
     console.log(data);
    }).catch((error)=>{
      console.log(error);
    });
  }

  changePage(type: string) {
    let pageSelect: Page;
    switch (type) {
      case "programa":
        pageSelect = ProgramPage;
        break;
      case "mapa":
        pageSelect = MapPage;
        break;
      case "disertantes":
        pageSelect = SpeackerListPage;
        break;
      default:
        pageSelect = StaticPage;
        break;
    }
    this.navCtrl.push(pageSelect);
  }
}
