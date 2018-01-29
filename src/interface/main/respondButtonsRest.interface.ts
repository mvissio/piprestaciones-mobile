import {CssResponseInterface} from '../index.interface'
export interface RespondButtonsRestInterface {
  MenuId?: string;
  TitleMenu: string;
  Status: boolean;
  Type: string;
  Order: number;
  Icon?: string;
  CssModelMenu?: CssResponseInterface;
}
