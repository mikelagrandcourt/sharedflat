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

  }

  onEditNotifications() {

  }

  onHelp() {

  }

}
