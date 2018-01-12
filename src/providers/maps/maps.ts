import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CoordsModel} from "../../model/maps/coords.model";

/*
  Generated class for the MapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapsProvider {

  constructor(private http: HttpClient) {
  }
  public findUbication(){
    let coords:CoordsModel = new CoordsModel();

    coords.id= 1;
    coords.lat =51.678418;
    coords.lng =7.809007;
    coords.zoom= 10;
    this.conectForUbication()
      .subscribe(
      (data)=> {
        console.log(data['results']);
      },
      (error) =>{
        return error;
      }
    );
    return coords;
  }

  private conectForUbication(){
      return this.http.get('https://randomuser.me/api/?results=2');
  }

}
