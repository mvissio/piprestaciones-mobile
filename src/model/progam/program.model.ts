import {CssProgramModel} from "../css/cssProgram.model";

export class ProgramModel{
  programID:string;
  title:string;
  type:string;
  order:number;
  cssCalendar:CssProgramModel;
  contentList?:ProgramModel[];
  staticPageId?:string;
  constructor(){
  }
}
