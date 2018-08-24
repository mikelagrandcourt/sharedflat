export class CalendarEvent {
  constructor(
    public title: string,
    public description: string,
    public startTime: Date,
    public endTime: Date,
    public allDay: boolean) {}
}
