import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SpeackerInterface} from "../../interface/speaker/speacker.interface";
import {SpeackerModel} from "../../model/speaker/speacker.model";
import {URL_PROVIDERS} from "../../config/urlProviders.config";
import {CssSpeackerModel} from "../../model/speaker/cssSpeacker.model";
import marked from 'marked';

/*
  Generated class for the SpeackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpeackerProvider {
  baseUrlMain: string = URL_PROVIDERS + '/Speackers';
  speackerModelList: SpeackerModel[] = [];

  constructor(public http: HttpClient) {
  }

  public findSpeacker(speackerId: string) {
    let speackerModel: SpeackerModel = new SpeackerModel();
    this.speackerModelList.forEach((speacker) => {
      if (speacker.id === speackerId) {
        speackerModel= speacker;
      }
    });
    return speackerModel;
  }

  public generateSpeacker(speackerInterface: SpeackerInterface) {
    let tempSpeacker: SpeackerModel = new SpeackerModel();
    tempSpeacker.description= [];
    tempSpeacker.cssSpeacker= new CssSpeackerModel();
    tempSpeacker.id = speackerInterface.Id;
    tempSpeacker.titleModal = marked(speackerInterface.TitleModal);
    tempSpeacker.fullName = marked(speackerInterface.FullName);
    speackerInterface.DescriptionList.forEach(description => {
      tempSpeacker.description.push(marked(description));
    });
    tempSpeacker.imageUrl = speackerInterface.ImageUrl;
    tempSpeacker.nationalityUrl = speackerInterface.NationalityUrl;
    tempSpeacker.webUrl = speackerInterface.WebUrl;
    tempSpeacker.cssSpeacker.cssSpeackerId = speackerInterface.CssSpeacker.CssSpeackerId;
    tempSpeacker.cssSpeacker.colorText = speackerInterface.CssSpeacker.ColorText;
    tempSpeacker.cssSpeacker.borderSize= speackerInterface.CssSpeacker.BorderSize;
    tempSpeacker.cssSpeacker.colorBack= speackerInterface.CssSpeacker.ColorBack;
    tempSpeacker.cssSpeacker.fontFamily= speackerInterface.CssSpeacker.FontFamily;
    return tempSpeacker;
  }


  public conectForMenus() {
    let url: string = this.baseUrlMain + '/GetAllSpeacker';
    this.http.get<[SpeackerInterface]>(url)
      .subscribe((dataList) => {
        dataList.forEach(data=>{
          this.speackerModelList.push(this.generateSpeacker(data));
        });
        return Promise.resolve(dataList);
        },
        (error) => {
          console.log(error);
          return Promise.reject(error);
        }
      );
  }
}
