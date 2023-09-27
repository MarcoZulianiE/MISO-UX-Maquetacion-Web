import { Component, OnInit } from '@angular/core';
import { Alarm } from '../alarm';
import { dataAlarms } from '../dataAlarms';

@Component({
  selector: 'app-my-alarms',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit {

  alarms: Array<Alarm> = [];
 
  constructor() { }

  ngOnInit() {
    this.alarms = this.getAlarmsList();
  }

  getAlarmsList(): Array<Alarm> {
    return dataAlarms;
  }

}
