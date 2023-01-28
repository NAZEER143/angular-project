import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';
import { hours} from '../../calendar/Localization/hours'
import { minutes} from '../../calendar/Localization/minutes'
import { colours } from '../Localization/colours';
import { IEventData } from '../Interface/IEventData';
@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.css']
})
export class AddEventDialogComponent {
  constructor(public dialogRef: MatDialogRef<EventDialogComponent>){

  }
  startDate:any;
  startHours:any;
  startMinutes:any;
  endDate:any;
  endHours:any;
  endMinutes:any;
  hours:any;
  minutes:any;
  colours:any;
  newEvent = {} as IEventData;
  ngOnInit() {
    this.hours = hours;
    this.minutes = minutes;
    this.colours = colours;
  }

  btn_SaveClick() {

    this.startDate.setHours(this.startDate.getHours() + this.startHours)
    this.startDate.setMinutes(this.startDate.getMinutes() + this.startMinutes)

    this.endDate.setHours(this.endDate.getHours() + this.endHours)
    this.endDate.setMinutes(this.endDate.getMinutes() + this.endMinutes);
    
    this.newEvent.startDate = this.startDate;
    this.newEvent.endDate = this.endDate;

    this.dialogRef.close(AddEventDialogComponent);
    
  }
}
