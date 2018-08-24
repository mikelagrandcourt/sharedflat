import { ProfileModalPage } from './../modals/profile-modal/profile-modal';
import { EventModalPage } from './../modals/event-modal/event-modal';
import { SettingsPage } from './../pages/settings/settings';
import { FinancePage } from './../pages/finance/finance';
import { ShoppingListPage } from './../pages/shopping-list/shopping-list';
import { CleaningPlanPage } from './../pages/cleaning-plan/cleaning-plan';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventPage } from '../pages/event/event';

import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    CleaningPlanPage,
    ShoppingListPage,
    FinancePage,
    EventPage,
    EventModalPage,
    SettingsPage,
    ProfileModalPage
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    CleaningPlanPage,
    ShoppingListPage,
    FinancePage,
    EventPage,
    EventModalPage,
    SettingsPage,
    ProfileModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
