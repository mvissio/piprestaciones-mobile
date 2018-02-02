import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {StaticModel} from "../../model/static/static.model";
import {StaticContentModel} from "../../model/static/staticContent.model";
import {CssStaticModel} from "../../model/css/cssStatic.model";
import {RespondButtonsRestInterface} from "../../interface/index.interface";
import {URL_PROVIDERS} from "../../config/urlProviders.config";
import {StaticPageInteface} from "../../interface/static/staticPage.inteface";
import marked from "marked";
import {StaticContentInterface} from "../../interface/static/staticContent.interface";

/*
  Generated class for the StaticProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StaticProvider {
  baseUrlMain: string = URL_PROVIDERS + '/StaticPages';

  staticPage:StaticPageInteface;

  constructor(public http: HttpClient) {
    Promise.resolve(this.conectForContent(1)).then((data)=>{
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    });
  }
  //
  // findContent(id: number) {
  //   // let staticData:StaticModel=null;
  //   return this.conectForContent(id);
  // }

  conectForContent(id: number) {
    let url: string = this.baseUrlMain + '/GetStaticPage';
    let params = new HttpParams().set('IdPage', id.toString());
    this.http.get<StaticPageInteface>(url, {params: params}).subscribe((data) => {
        data.PageTitle = marked(data.PageTitle);
        data.StaticContentList.forEach(content=>{
          content.StaticContentText = marked(content.StaticContentText);
        });
        this.staticPage= data;
        // let staticData:StaticModel;
        // staticData.id= data.PageId;
        // staticData.titlePage= data.PageTitle;
        // data.StaticContentList.forEach((staticContent)=>{
        //   let staticContTemp= new StaticContentModel();
        //   staticContTemp.id= staticContent.StaticContentId;
        //   staticContTemp.text= staticContent.StaticContentText;
        //   staticContTemp.order= staticContent.StaticContentOrder;
        //   staticContTemp.type=staticContent.StaticContentType;
        //   staticData.staticContentList.push(staticContTemp);
        //   // staticContTemp.cssStatic.colorText=staticContent.cssStaticContent.
        //   // staticContTemp.cssStatic.colorText
        //   // staticContTemp.cssStatic.colorText
        //   // staticContTemp.cssStatic.colorText
        // });
        // staticDataReturn = staticData;
        // console.log(staticData);
        // //
        // //
        // //   PageId:number;
        // // PageTitle:string;
        // // StaticContentList?:StaticContentInterface[];
        // // CssStaticPage?:CssStaticPageInteface;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //
  // public conectForUbication(){
  //   let url: string = this.baseUrlMain + '/GetMaps';
  //   // let headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   this.http.get<[MapInterface]>(url)
  //     .subscribe((dataList) => {
  //         dataList.forEach(
  //           (data) => {
  //             data.Title= marked(data.Title);
  //             this.mapList.push(data);
  //             // if (this.platform.is("cordova")) {
  //             //   this.insertData(data);
  //             // }
  //           }
  //         );
  //         console.log(dataList);
  //         return Promise.resolve(dataList);
  //       },
  //       (error) => {
  //         console.log(error);
  //         return Promise.reject(error);
  //       }
  //     );
  // }
}
