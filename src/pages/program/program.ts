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
  colorText:string="#f2f2f2";
  selectedFont:string;
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




  randomcolor = this.getRandomColor();

  //function to get random colors
  public getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setColor() {
    this.randomcolor = this.getRandomColor();
  }
}
