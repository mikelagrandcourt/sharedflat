import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinanceDetailsPage } from './finance-details';

@NgModule({
  declarations: [
    FinanceDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FinanceDetailsPage),
  ],
})
export class FinanceDetailsPageModule {}
