import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {SpeackerModel} from "../../model/speaker/speacker.model";
import {SpeackerProvider} from "../../providers/speacker/speacker";

/**
 * Generated class for the SpeackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-speacker',
  templateUrl: 'speacker.html',
})
export class SpeackerPage {

  speackerModel: SpeackerModel = new SpeackerModel();
  divisor:boolean=true;
  constructor(private speackerProv:SpeackerProvider, private viewCtrl:ViewController, private navParams:NavParams) {
    this.speackerModel = speackerProv.findSpeacker(navParams.get('speackerId'));
    console.log(this.speackerModel);
  }
  onClose(){
    this.viewCtrl.dismiss();
  }
}
