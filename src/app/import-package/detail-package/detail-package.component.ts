import { Component, OnInit } from '@angular/core';
import { Alarm } from '../alarm';
import { dataAlarms } from '../dataAlarms';

@Component({
  selector: 'app-my-alarms',
  templateUrl: './detail-package.component.html',
  styleUrls: ['./detail-package.component.css']
})
export class DetailPackageComponent implements OnInit {

  alarms: Array<Alarm> = [];
 
  constructor() { }

  ngOnInit() {
    this.alarms = this.getAlarmsList();
  }

  getAlarmsList(): Array<Alarm> {
    return dataAlarms;
  }

}
