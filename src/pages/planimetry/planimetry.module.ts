import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanimetryPage } from './planimetry';

@NgModule({
  declarations: [
    PlanimetryPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanimetryPage),
  ],
})
export class PlanimetryPageModule {}
