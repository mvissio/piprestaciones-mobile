import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {SpeackerProvider} from "../../providers/speacker/speacker";
import {SpeackerModel} from "../../model/speaker/speacker.model";
import {SpeackerPage} from "../speacker/speacker";

/**
 * Generated class for the SpeackerListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-speacker-list',
  templateUrl: 'speacker-list.html',
})
export class SpeackerListPage {
  speackerList:SpeackerModel[] =  [];

  constructor(private navParams:NavParams, private speackerProv: SpeackerProvider, private modalCtrl:ModalController) {
    Promise.resolve(speackerProv.conectForMenus()).then(()=>{
      this.speackerList=this.speackerProv.speackerModelList;
      console.log(this.speackerList);
    }).catch((error)=>{
      console.log(error);
    });
  }


  getItems(ev) {
    let val = ev.target.value;
    this.speackerList = this.speackerProv.speackerModelList;

    if (val && val.trim() != '') {
      this.speackerList = this.speackerList.filter((speacker) => {
        return (speacker.fullName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  findStaticPage(speackerId: string) {
    this.modalCtrl.create(SpeackerPage,  { speackerId: speackerId }).present();
  }

  onMessage(contactId: string) {
    console.log("mensaje - " + contactId);
  }


}
