import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SharedFlatModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shared-flat-modal',
  templateUrl: 'shared-flat-modal.html',
})
export class SharedFlatModalPage {

  sharedFlatTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.sharedFlatTitle = this.navParams.get('sharedFlatTitle');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
