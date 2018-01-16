import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {MainPage} from '../pages/index.paginas';
import {SQLite} from "@ionic-native/sqlite";
import { DbConectProvider} from '../providers/db-conect/db-conect';
import {HomePage} from "../pages/home/home";
import {MainProvider} from "../providers/main/main";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MainPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public mainProv: MainProvider, public dbConect:DbConectProvider, public statusBar: StatusBar, public splashScreen: SplashScreen,     public sqlite: SQLite) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Main', component: MainPage},
      {title: 'Home', component: HomePage}
    ];
    // mainProv.conectForMenus();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.platform.is("cordova")) {
        this.createDatabase();
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  private createDatabase(){
    this.sqlite.create({
      name: 'data.db.piprestaciones',
      location: 'default' // the location field is required
    })
      .then((db) => {
        this.dbConect.setDatabase(db);
        return this.dbConect.createTable("test");
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
