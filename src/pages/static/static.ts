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
  staticModel: StaticModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private staticProv:StaticProvider) {
    this.findContent();
  }

  findContent(){
    this.staticModel = this.staticProv.findContent(1);
    this.staticModel.titlePage= marked(this.staticModel.titlePage);
    for(let staticContent of this.staticModel.staticContentList){
      staticContent.text = marked(staticContent.text);
    }
    // this.textStatic = marked("# ***lunes***");
  }
//
//   findText() {
//     // document.getElementById("#text-def").innerHTML
//   }
//
//   addCss() {
//     // let elements = document.getElementById(this.test);
//     // console.log(elements);
//     // for (let i = 0; i <= elements.length; i++) {
//     //   elements.innerHTML =
//     // this.stylesInject =;
//     this.stylesInject = "<style>\n" +
//       "div{\n" +
//       "    background-color: orange !important;\n" +
//       "}\n" +
//       "</style>\n"
// ;
//
//     console.log(this.stylesInject);
//     // console.log(elements.item(i).style);
//     // console.log(elements.item(i));
//     // }
//   }
}
