import {CssSpeackerInterface} from "./cssSpeacker.interface";

export interface SpeackerInterface{
  Id:string;
  TitleModal:string;
  FullName:string;
  DescriptionList:string[];
  ImageUrl:string;
  NationalityUrl:string;
  WebUrl:string;
  CssSpeacker:CssSpeackerInterface;
}
