import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MapsProvider} from "../../providers/maps/maps";
import {CoordsModel} from "../../model/maps/coords.model";

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  coords: CoordsModel;

  constructor(public mapsProv: MapsProvider) {
    Promise.resolve(this.mapsProv.conectForUbication()).then((data)=>{
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    });
  }
}
