import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {MapPage, AgendaPage, StaticPage, MainPage, ProgramPage} from '../pages/index.paginas';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PrincipalProvider} from '../providers/principal/principal';
import {SQLite} from "@ionic-native/sqlite";
import {DbConnectProvider} from '../providers/db-conect/db-connect.provider';
import {MainProvider} from '../providers/main/main';
import {ProgramProvider} from '../providers/program/program';
import {AgmCoreModule} from "@agm/core";
import {MapsProvider} from '../providers/maps/maps';
import {HttpClientModule} from "@angular/common/http";
import {StaticProvider} from '../providers/static/static';
import {TableButtonMenuProvider,TableCssMainProvider} from "../providers/db-conect/db-tables/db-index.provider";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    ProgramPage,
    MapPage,
    StaticPage,
    AgendaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYQMf7FFP0S7pdPEl5Vq4uUq3b2gNbJ70'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    ProgramPage,
    MapPage,
    StaticPage,
    AgendaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PrincipalProvider,
    DbConnectProvider,
    TableCssMainProvider,
    TableButtonMenuProvider,
    MainProvider,
    ProgramProvider,
    ProgramProvider,
    MapsProvider,
    StaticProvider
  ]
})
export class AppModule {
}
