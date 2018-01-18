import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {MainPage} from '../pages/index.paginas';
import {SQLite} from "@ionic-native/sqlite";
import { DbConnectProvider} from '../providers/db-conect/db-connect.provider';
import {HomePage} from "../pages/home/home";
import {MainProvider} from "../providers/main/main";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MainPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public dbConect:DbConnectProvider,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public sqlite: SQLite) {
    this.initializeApp();
    this.pages = [
      {title: 'Main', component: MainPage},
      {title: 'Home', component: HomePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
        this.createDatabase();
      }else{
        console.log("Sin cordova");
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  private createDatabase(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
      .then((db) => {
        this.dbConect.setDatabase(db);
        this.dbConect.createTables();
        console.log("Tablas Creadas");
      })
      .then(() =>{
        this.splashScreen.hide();
        this.rootPage = 'MainPage';
      })
      .catch(error =>{
        console.error(error);
      });
  }
}
