import {CssStaticModel} from "../css/cssStatic.model";

export class StaticContentModel{
  id:number;
  type:string;
  order: number;
  text: string;
  cssStatic: CssStaticModel;

  constructor() {
  }
}
