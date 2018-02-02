import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeackerListPage } from './speacker-list';

@NgModule({
  declarations: [
    SpeackerListPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeackerListPage),
  ],
})
export class SpeackerListPageModule {}
