import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {StaticModel} from "../../model/static/static.model";
import {StaticContentModel} from "../../model/static/staticContent.model";
import {CssStaticModel} from "../../model/css/cssStatic.model";
import {RespondButtonsRestInterface} from "../../interface/index.interface";
import {URL_PROVIDERS} from "../../config/urlProviders.config";
import {Observable} from "rxjs/Observable";
import {StaticPageInteface} from "../../interface/static/staticPage.inteface";
import {StaticContentInterface} from "../../interface/static/staticContent.interface";
import {CssStaticPageInteface} from "../../interface/static/cssStaticPage.inteface";

/*
  Generated class for the StaticProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StaticProvider {
  baseUrlMain: string = URL_PROVIDERS + '/PantallaEstaticas';


  constructor(public http: HttpClient) {
  }

  /*
    findContent(id:number){
      let staticModel:StaticModel= new StaticModel();
      staticModel.cssModel= new CssStaticModel();
      staticModel.id = 1;
      staticModel.titlePage = "# Agenda";
      staticModel.cssModel.colorText= "blue";
      staticModel.staticContentList = [];
      let staticContent:StaticContentModel= new StaticContentModel();
      staticContent.id=1;
      staticContent.type="title";
      staticContent.text = "# lunes";
      staticContent.order = 1;
      staticContent.cssStatic= new CssStaticModel();
      staticContent.cssStatic.colorText="red";
      staticContent.cssStatic.colorBack="black";
      staticModel.staticContentList.push(staticContent);
      return staticModel;
    }*/
  findContent(id: number) {
    // let staticData:StaticModel=null;
    return this.conectForContent(id);
  }

  conectForContent(id: number) {
    let staticDataReturn:StaticModel=null;
    let url: string = this.baseUrlMain + '/GetStaticPages';
    let params = new HttpParams().set('idPage', id.toString());
    this.http.get<StaticPageInteface>(url, {params: params}).subscribe((data) => {
        console.log(data);
        let staticData:StaticModel;
        staticData.id= data.PageId;
        staticData.titlePage= data.PageTitle;
        data.StaticContentList.forEach((staticContent)=>{
          let staticContTemp= new StaticContentModel();
          staticContTemp.id= staticContent.StaticContentId;
          staticContTemp.text= staticContent.StaticContentText;
          staticContTemp.order= staticContent.StaticContentOrder;
          staticContTemp.type=staticContent.StaticContentType;
          staticData.staticContentList.push(staticContTemp);
          // staticContTemp.cssStatic.colorText=staticContent.cssStaticContent.
          // staticContTemp.cssStatic.colorText
          // staticContTemp.cssStatic.colorText
          // staticContTemp.cssStatic.colorText
        });
        staticDataReturn = staticData;
        console.log(staticData);
        //
        //
        //   PageId:number;
        // PageTitle:string;
        // StaticContentList?:StaticContentInterface[];
        // CssStaticPage?:CssStaticPageInteface;
      },
      (error) => {
        console.log(error);
      }
    )
    return staticDataReturn;
    ;
  }
}
