import {Injectable} from '@angular/core';
import {MenuOptionsModel} from "../../model/menuOptions.model";
import {StaticPage, ProgramPage, MapPage} from "../../pages/index.paginas";

@Injectable()
export class MainProvider {

  constructor() {

  }


  public findButtons() {
    let menuArray: MenuOptionsModel[] = [];
    let responseArray: respondButtons[]=this.conectFindButtons();
    for(let response of responseArray)  {
      let menu: MenuOptionsModel = new MenuOptionsModel();
      menu.id = response.id;
      menu.titleMenu = response.titleMenu;
      menu.order = response.order;
      menu.icon= response.icon;
      switch (response.type) {
        case "programa":
          menu.type = "program";
          menu.page = ProgramPage;
          break;
        case "maps":
          menu.type = "map";
          menu.page = MapPage;
          break;
        default:
          menu.type = "static";
          menu.page = StaticPage;
          break;
      }
      menuArray.push(menu);
    }
    console.log(menuArray);
    menuArray.sort(function(a, b){return a.order- b.order});
    return menuArray;
  }

  private conectFindButtons() {
    let responseArray: respondButtons[]=[];
    let response1:respondButtons = new respondButtons();
    response1.id="1";
    response1.titleMenu= "Programa";
    response1.icon="calendar";
    response1.order= 4;
    response1.type="programa";
    let response2:respondButtons = new respondButtons();
    response2.id="2";
    response2.titleMenu= "Comite";
    response2.icon="albums";
    response2.order= 3;
    response2.type="estatica";
    let response3:respondButtons = new respondButtons();
    response3.id="3";
    response3.titleMenu= "Ubicación";
    response3.icon="map";
    response3.order= 2;
    response3.type="maps";
    responseArray.push(response1);
    responseArray.push(response2);
    responseArray.push(response3);
    return responseArray;
  }


}

export class respondButtons{
  id?: string;
  titleMenu: string;
  status: boolean;
  type: string;
  order: number;
  icon?: string;


  constructor() {
  }
}
