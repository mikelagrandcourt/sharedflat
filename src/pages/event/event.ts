import { CalendarEvent } from './../../data/calendar-event';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { CalendarComponent } from "ionic2-calendar/calendar";
import { EventModalPage } from '../event-modal/event-modal';

import * as hash from 'object-hash';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  events: Map<string, CalendarEvent> = new Map<string, CalendarEvent>();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  addEvent() {

    // open event creation modal/popup
    let modal = this.modalCtrl.create(EventModalPage, { selectedDay: this.selectedDay });
    modal.present();

    // save event in calendar instance // TODO: later in database!
    modal.onDidDismiss(data => {
      if (data) {

        let calendarEvent = new CalendarEvent(data.title, data.description, new Date(data.startTime), new Date(data.endTime), data.allDay);
        console.log('addEvent Hash: ' + hash(calendarEvent));
        this.events.set(hash(calendarEvent), calendarEvent);
        this.eventSource.push(calendarEvent);
        this.myCalendar.loadEvents();
      }
    });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

  onEventSelected(event) {

    let selectedEvent = new CalendarEvent(event.title, event.description, new Date(event.startTime), new Date(event.endTime), event.allDay);
    let eventHash = hash(selectedEvent);
    let modal = this.modalCtrl.create(EventModalPage,
      {event: selectedEvent, modalTitle: 'Ereigniss bearbeiten', btnSave: 'Aktualisieren', btnCancel: 'Zurück'});
    modal.present();

    modal.onDidDismiss(data => {

      if(data) {

        this.eventSource = [];

        // remove old event from list!!!
        this.events.delete(eventHash);

        // set new event AND new hash
        let updatedEvent = new CalendarEvent(data.title, data.description, new Date(data.startTime), new Date(data.endTime), data.allDay);
        this.events.set(hash(updatedEvent), updatedEvent);
        let keys = Array.from(this.events.keys());

        // fill eventsource again
        keys.forEach(key => {
          // console.log(key);
          this.eventSource.push(this.events.get(key));
        });

        // update calendar view
        this.myCalendar.loadEvents();
      }
    });
  }

}
