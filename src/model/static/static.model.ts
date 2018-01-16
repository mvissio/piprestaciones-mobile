import {CssStaticModel} from "../css/cssStatic.model";
import {StaticContentModel} from "./staticContent.model";

export class StaticModel{
  id:number;
  titlePage: string;
  staticContentList: StaticContentModel[];
  cssModel:CssStaticModel;


  constructor() {
  }
}
