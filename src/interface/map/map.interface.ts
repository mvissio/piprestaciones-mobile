export interface MapInterface{
  MapId:string;
  Order:number;
  Title:string;
  Lat?:number;
  Lng?:number;
  Zoom?:number;
  IsMap:boolean;
  ImageList?:string[];
  BorderColor?:string;
  BorderSize?:number;
}
