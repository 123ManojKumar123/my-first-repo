import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.scss']
})
export class RouteThreeComponent implements OnInit {
  timerVal!:number;
  pauseCounter=0;
  startCounter=0;
  logData:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  GetTimerValue(val:number): void {
    this.timerVal = val;
  }
  updateCount(val:any,counterType:string):void {
    counterType !== 'resume' ? this.pauseCounter++ : this.startCounter++;
    this.logData.push(`${counterType === 'resume'?'started at':'paused at'} ${moment(new Date()).format('DD-MM-YYYY hh:mm:ss a')}`);
  }

  resetData():void {
    this.logData = [];
    this.pauseCounter = 0;
    this.startCounter = 0;
  }

}
