import {ProgramHourModel} from "./programHour.model";
import {CssProgramModel} from "../css/cssProgram.model";

export class ProgramaDateModel{
  id:number;
  title: string;
  programHourList:ProgramHourModel[];
  order:number;
  cssAtributes:CssProgramModel;
  imageSrc:string;


  constructor() {
  }
}
