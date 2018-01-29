import {StaticContentInterface} from "./staticContent.interface";
import {CssStaticPageInteface} from "./cssStaticPage.inteface";

export interface StaticPageInteface{
  PageId:number;
  PageTitle:string;
  StaticContentList?:StaticContentInterface[];
  CssStaticPage?:CssStaticPageInteface;
}


