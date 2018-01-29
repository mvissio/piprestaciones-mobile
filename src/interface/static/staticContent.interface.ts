import {CssStaticContentInterface} from "./cssStaticContent.interface";

export interface StaticContentInterface{
  StaticContentId:number;
  StaticContentType:string;
  StaticContentOrder:number;
  StaticContentText:string;
  cssStaticContent:CssStaticContentInterface;
}
