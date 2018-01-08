import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MapPage,StaticPage,MainPage,ProgramPage} from '../pages/index.paginas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrincipalProvider } from '../providers/principal/principal';
import {SQLite} from "@ionic-native/sqlite";
import { DbConectProvider } from '../providers/db-conect/db-conect';
import { MainProvider } from '../providers/main/main';
import { ProgramProvider } from '../providers/program/program';
import {PipesModule} from "../pipes/pipes.module";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    ProgramPage,
    MapPage,
    StaticPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    ProgramPage,
    MapPage,
    StaticPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PrincipalProvider,
    DbConectProvider,
    MainProvider,
    ProgramProvider,
    ProgramProvider
  ]
})
export class AppModule {}
