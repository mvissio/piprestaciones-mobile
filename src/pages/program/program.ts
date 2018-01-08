import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProgramAreaModel} from "../../model/progam/programArea.model";
import {ProgramaDateModel} from "../../model/progam/programaDate.model";
import marked from 'marked';

/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program',
  templateUrl: 'program.html',
})
export class ProgramPage {
  @ViewChild(Content) content: Content;

  programAreaList:ProgramAreaModel[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let program:ProgramAreaModel= new ProgramAreaModel();
    let programHour1:ProgramaDateModel= new ProgramaDateModel();
    let programHour2:ProgramaDateModel= new ProgramaDateModel();
    program.title= marked("lunes");
    program.order = 1;
    programHour1.title= "test1";
    programHour2.title= "test2";
    program.programaDateList = [];
    program.programaDateList.push(programHour1);
    program.programaDateList.push(programHour2);
    this.programAreaList.push(program);
  }
  pushProgram(programDate){
    console.log(programDate);
    this.navCtrl.push(ProgramPage);
  }
}
