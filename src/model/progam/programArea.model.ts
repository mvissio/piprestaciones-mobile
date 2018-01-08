import {ProgramaDateModel} from "./programaDate.model";
import {CssProgramModel} from "../css/cssProgram.model";

export class ProgramAreaModel{
  id:number;
  title:string;
  imageSrc:string;
  programaDateList:ProgramaDateModel[];
  order:number;
  cssAtributes:CssProgramModel;
  constructor() {
  }
}
