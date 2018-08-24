import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage implements OnInit {

  event = { title: null, description: null, startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
  modalTitle: string;
  btnSave: string;
  btnCancel: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ngOnInit() {

    this.modalTitle = this.navParams.get('modalTitle') ? this.navParams.get('modalTitle') : 'Ereignis erstellen';
    this.btnSave = this.navParams.get('btnSave') ? this.navParams.get('btnSave') : 'Hinzufügen';
    this.btnCancel = this.navParams.get('btnCancel') ? this.navParams.get('btnCancel') : 'Abbrechen';

    if(this.navParams.get('event')) {

      this.event = this.navParams.get('event');
      this.event.startTime = moment(this.navParams.get('event').startTime).format();
      this.event.endTime = moment(this.navParams.get('event').endTime).format();

    } else {

      let preselectedDate = moment(this.navParams.get('selectedDay')).format();
      this.event.startTime = preselectedDate;
      this.event.endTime = preselectedDate;

    }

  }

  save() {
    this.viewCtrl.dismiss(this.event);
  }

  cancel() {
    this.viewCtrl.dismiss();
  }



}
