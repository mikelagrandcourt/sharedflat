import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CleaningPlanPage } from './cleaning-plan';

@NgModule({
  declarations: [
    CleaningPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(CleaningPlanPage),
  ],
})
export class CleaningPlanPageModule {}
