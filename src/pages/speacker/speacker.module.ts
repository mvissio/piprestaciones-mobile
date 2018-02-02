import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeackerPage } from './speacker';

@NgModule({
  declarations: [
    SpeackerPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeackerPage),
  ],
})
export class SpeackerPageModule {}
