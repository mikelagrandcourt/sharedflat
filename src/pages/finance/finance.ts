import { Item } from './../../data/item';
import { User } from './../../data/user';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finance',
  templateUrl: 'finance.html',
})
export class FinancePage implements OnInit {

  public open: boolean = false;
  public sections: Map<User, boolean> = new Map<User, boolean>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    console.log("--- ngOnInit() ---")
    // create test sections
    this.sections.set(new User('Mike Lagrandcourt', [
      new Item('Apfelsaft', 10),
      new Item('Toilettenpapier', 5)
    ]), false);
    this.sections.set(new User('Phil Ohnenachnamen', [
      new Item('Bananen', 6)
    ]), false);
    this.sections.set(new User('Peter Zwegat', []), false);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinancePage');
  }

  openDropdown(event: any, user: User) {

    // reset all dropdowns
    this.resetAllDropdowns();

    // open up selected dropdown
    this.sections.set(user, true);
  }

  private resetAllDropdowns() {
    let users = this.getUsers(this.sections);
    users.forEach(user => {
      this.sections.set(user, false);
    });
  }

  closeDropdown(event: any, user: User) {
    this.sections.set(user, false);
  }

  getUsers(sections: Map<User, boolean>): User[] {
    return Array.from(sections.keys());
  }

  getSum(items: Item[]): number {
    let sum: number = 0;
    items.forEach(item => {
      sum += item.price;
    });
    return sum;
  }

}
