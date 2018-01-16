import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {StaticModel} from "../../model/static/static.model";
import {StaticContentModel} from "../../model/static/staticContent.model";
import {CssStaticModel} from "../../model/css/cssStatic.model";

/*
  Generated class for the StaticProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StaticProvider {

  constructor(public http: HttpClient) {
  }

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
  }

  conectForContent(id:number){
  }
}
