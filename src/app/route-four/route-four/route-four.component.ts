import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-route-four',
  templateUrl: './route-four.component.html',
  styleUrls: ['./route-four.component.scss']
})
export class RouteFourComponent implements OnInit {

  timerVal!:number;
  pauseCounter=0;
  startCounter=0;
  logData:string[]=[];

  constructor(public dataServcice:SharedService) { }

  ngOnInit(): void {
    this.dataServcice.timerVal$.subscribe(val=>{
      this.timerVal = val;
    });
    this.dataServcice.updatePause$.subscribe(val=> this.updateCount(val,'pause'));
    this.dataServcice.updateResume$.subscribe(val=> this.updateCount(val,'resume'));
    this.dataServcice.resetData$.subscribe(()=> this.resetData());
  }

  updateCount(val:any,counterType:string):void {
    counterType !== 'resume' ?
    this.dataServcice.updatePauseCounter(++this.pauseCounter) :
    this.dataServcice.updateStartCounter(++this.startCounter);
    this.updateLogger(counterType);
  }

  updateLogger(val:string):void {
    this.logData.push(`${val === 'resume'?'started at':'paused at'} ${moment(new Date()).format('DD-MM-YYYY hh:mm:ss a')}`);
    this.dataServcice.updateLogData(this.logData);
  }

  resetData():void {
    this.logData = [];
    this.pauseCounter = 0;
    this.startCounter= 0;
    this.dataServcice.updateLogData([]);
    this.dataServcice.updatePauseCounter(0);
    this.dataServcice.updateStartCounter(0);
  }

}
