import { SharedFlatModalPage } from './../modals/shared-flat-modal/shared-flat-modal';
import { ProfileModalPage } from './../modals/profile-modal/profile-modal';
import { SettingsPage } from './../pages/settings/settings';
import { EventPage } from './../pages/event/event';
import { FinancePage } from './../pages/finance/finance';
import { ShoppingListPage } from './../pages/shopping-list/shopping-list';
import { CleaningPlanPage } from './../pages/cleaning-plan/cleaning-plan';
import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventModalPage } from '../modals/event-modal/event-modal';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = SettingsPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dienstplan', component: CleaningPlanPage },
      { title: 'Einkaufsliste', component: ShoppingListPage },
      { title: 'Finanzen', component: FinancePage },
      { title: 'Ereignisse', component: EventPage },
      { title: 'Einstellungen', component: SettingsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
