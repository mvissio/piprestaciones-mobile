import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProgramProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProgramProvider {

  constructor(private http: HttpClient) {
    console.log('Hello ProgramProvider Provider');
  }

}
