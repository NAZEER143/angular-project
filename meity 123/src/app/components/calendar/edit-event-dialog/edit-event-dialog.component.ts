import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEventData } from '../Interface/IEventData';
import { colours } from '../Localization/colours';
import { hours } from '../Localization/hours';
import { minutes } from '../Localization/minutes';

@Component({
  selector: 'app-edit-event-dialog',
  templateUrl: './edit-event-dialog.component.html',
  styleUrls: ['./edit-event-dialog.component.css']
})
export class EditEventDialogComponent {

  previousStartHours:any;
  startDate:any;
  startHours:any;
  startMinutes:any;
  endDate:any;
  endHours:any;
  endMinutes:any;
  title:any;
  desc:any;
  createdBy:any;
  color:any;
  hours:any;
  minutes:any;
  colours:any;
  editEvent = {} as IEventData;


  constructor(
    public dialogRef: MatDialogRef<EditEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    
/*    this.previousStartHours = formatDate(this.data.startDate, 'hh', 'en');
    this.endDate = formatDate(this.data.endDate, ' MMMM. dd hh:mm', 'en'); */
  
    this.editEvent.startDate = this.data.startDate;
    this.editEvent.startDate.setHours(0, 0, 0, 0);
    this.editEvent.endDate = this.data.endDate;
    this.editEvent.endDate.setHours(0, 0, 0, 0);

    this.editEvent.title = this.data.title;
    this.editEvent.desc = this.data.desc;
    this.editEvent.createdBy = this.data.createdBy;
    this.editEvent.color = this.data.color;
    this.hours = hours;
    this.minutes = minutes;
    this.colours = colours;
  }

  btn_SaveChangesClick() {

  this.editEvent.startDate.setHours(this.startHours, this.startMinutes);
  this.editEvent.endDate.setHours(this.endHours, this.endMinutes);
  
  this.dialogRef.close(EditEventDialogComponent);

  }

}
