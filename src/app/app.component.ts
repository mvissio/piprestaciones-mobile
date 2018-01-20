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
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
      {title: 'Main', component: MainPage},
      {title: 'Home', component: HomePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
