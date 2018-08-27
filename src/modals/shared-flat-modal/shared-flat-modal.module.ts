import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedFlatModalPage } from './shared-flat-modal';

@NgModule({
  declarations: [
    SharedFlatModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SharedFlatModalPage),
  ],
})
export class SharedFlatModalPageModule {}
