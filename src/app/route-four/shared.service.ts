import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _timerValSource = new Subject<number>();
  timerVal$ = this._timerValSource.asObservable();

  private _updatePause = new Subject<string>();
  updatePause$ = this._updatePause.asObservable();

  private _updateResume = new Subject<string>();
  updateResume$ = this._updateResume.asObservable();

  private _resetData = new Subject<string>();
  resetData$ = this._resetData.asObservable();

  private _logData = new Subject<string[]>();
  logData$ = this._logData.asObservable();
  
  logArray:string[]=[]
  

  private _pauseCounter = new Subject<number>();
  pauseCounter$ = this._pauseCounter.asObservable();

  private _startCounter = new Subject<number>();
  startCounter$ = this._startCounter.asObservable();

  constructor() { }

  updateTimerVal(val:number):void {
    this._timerValSource.next(val);
  }

  updatePauseVal(val:string):void {
    this._updatePause.next(val);
  }

  updateResumeVal(val:string):void {
    this._updateResume.next(val);
  }

  resetDataVal():void {
    this._resetData.next('true');
  }

  updateLogData(val:string[]):void {
    this._logData.next(val);
  }

  updateStartCounter(val:number):void {
    this._startCounter.next(val);
  }

  updatePauseCounter(val:number):void {
    this._pauseCounter.next(val)
  }
}
