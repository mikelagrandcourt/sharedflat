import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CleaningPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cleaning-plan',
  templateUrl: 'cleaning-plan.html',
})
export class CleaningPlanPage {

  public items:string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = ["Banana", "Apple", "Orange"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningPlanPage');
  }

}
