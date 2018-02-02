import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import marked from 'marked';
import {ProgramModel} from "../../model/progam/program.model";
import {CssProgramModel} from "../../model/css/cssProgram.model";

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
  calendarList:ProgramModel[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setData();
  }

  setData(){
    let calendar:ProgramModel = new ProgramModel();
    calendar.cssCalendar = new CssProgramModel();
    this.selectType();
    calendar.programID = "1";
    calendar.title = "test";
    calendar.type = "static";
    calendar.order= 1;
    calendar.cssCalendar.colorText = "red";
    calendar.cssCalendar.fontFamily= "red";
    calendar.cssCalendar.cssCalendarId= "1";
    this.calendarList.push(calendar);
  }


  selectType(){
    this.calendarList.forEach(
      (calendar)=>{
        switch (calendar.type){
          case "static":
            calendar.cssCalendar.icon="arrow-forward";
            calendar.cssCalendar.class="area-content";
            break;
          case "area":
            calendar.cssCalendar.icon="add";
            calendar.cssCalendar.class="area-content";
            break;
          case "dia":
            calendar.cssCalendar.icon="add";
            calendar.cssCalendar.class="day-content";
            break;
        }
      }
    )
  }
}
