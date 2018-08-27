import { SharedFlatModalPage } from './../../modals/shared-flat-modal/shared-flat-modal';
import { ProfileModalPage } from './../../modals/profile-modal/profile-modal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  onEditProfile() {
    let profileModal = this.modalCtrl.create(ProfileModalPage);
    profileModal.present();

    profileModal.onDidDismiss(data => {
      if(data) {
        // udpdate data in database!
      }
    });
  }

  onEditSharedFlat() {
    let sharedFlatModal = this.modalCtrl.create(SharedFlatModalPage, {sharedFlatTitle: 'Die Scheune'});
    sharedFlatModal.present();

    sharedFlatModal.onDidDismiss(data => {
      if(data) {
        // update data in database!
      }
    });
  }

  onEditNotifications() {

  }

  onHelp() {

  }

}
