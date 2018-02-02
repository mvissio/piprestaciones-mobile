import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CoordsModel} from "../../model/maps/coords.model";
import {MapInterface} from "../../interface/map/map.interface";
import {URL_PROVIDERS} from "../../config/urlProviders.config";
import {RespondButtonsRestInterface} from "../../interface/index.interface";
import marked from "marked";

@Injectable()
export class MapsProvider {
  baseUrlMain: string = URL_PROVIDERS + '/Maps';

  mapList:MapInterface[]= [];

  constructor(private http: HttpClient) {
  }
  // public findUbication(){
  //   let coords:CoordsModel = new CoordsModel();
  //
  //   coords.id= 1;
  //   coords.lat =51.678418;
  //   coords.lng =7.809007;
  //   coords.zoom= 10;
  //   this.conectForUbication()
  //     .subscribe(
  //     (data)=> {
  //       console.log(data['results']);
  //     },
  //     (error) =>{
  //       return error;
  //     }
  //   );
  //   return coords;
  // }

  public conectForUbication(){
    let url: string = this.baseUrlMain + '/GetMaps';
    // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.get<[MapInterface]>(url)
      .subscribe((dataList) => {
          dataList.forEach(
            (data) => {
              data.Title= marked(data.Title);
              this.mapList.push(data);
              // if (this.platform.is("cordova")) {
              //   this.insertData(data);
              // }
            }
          );
          console.log(dataList);
          return Promise.resolve(dataList);
        },
        (error) => {
          console.log(error);
          return Promise.reject(error);
        }
      );
  }

}
