import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import marked from 'marked';
import {StaticModel} from "../../model/static/static.model";
import {StaticProvider} from "../../providers/static/static";

/**
 * Generated class for the StaticPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-static',
  templateUrl: 'static.html'
})
export class StaticPage {
  staticModel: StaticModel= new StaticModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, private staticProv:StaticProvider) {
    this.findContent();
  }

  findContent(){
    // this.staticModel = this.staticProv.findContent(1);
    // this.staticModel=this.staticProv.findContent(1);
    // this.staticModel.titlePage= marked(this.staticModel.titlePage);
    // for(let staticContent of this.staticModel.staticContentList){
    //   staticContent.text = marked(staticContent.text);
    // }
    // this.textStatic = marked("# ***lunes***");
  }
}
