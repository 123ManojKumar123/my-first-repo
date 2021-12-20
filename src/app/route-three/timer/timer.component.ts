import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { BehaviorSubject, NEVER, Observable, Observer, Subject, timer } from "rxjs";
import { map, switchMap, take, tap } from "rxjs/operators";

function timerWithPause(
  starterStopper: Observable<boolean>,
  pauser: Observable<boolean>,
  countVal: number
): Observable<number> {
  return new Observable((obs: Observer<number>) => {
    let i = 0;
    let ticker = starterStopper.pipe(
      switchMap(start => {
        if (start) return timer(0, 1000 ).pipe(map(_ => --countVal));
        i = 0;
        return NEVER;
      })
    );

    let p = pauser.pipe(switchMap(paused => (paused ? NEVER : ticker)));
    return p.subscribe({
      next: val => {
        console.log(); obs.next(val)},
      error: err => obs.error(err),
      complete: () => obs.complete()
    });
  });
}
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  pauser = new BehaviorSubject<boolean>(false);
  starterStopper = new BehaviorSubject<boolean>(false);
  timerValue!:number;
  shadowTimer!:number;
  isLoggerRequired = false;
  counter$ = new BehaviorSubject<number>(0);
  counterValue!: number;
  suscribe:any;
  interval!: any;
  clickLogs:any = [];
  @Output() counterTime = new EventEmitter();
  @Output() updatePause = new EventEmitter();
  @Output() updateResume = new EventEmitter();
  @Output() loggerData = new EventEmitter();
  @Output() resetData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    timerWithPause(this.starterStopper, this.pauser, this.shadowTimer).subscribe({
      next: (value) => {
        if(this.shadowTimer>0){
          this.counter$.next(--this.shadowTimer)
          this.counterTime.emit(this.shadowTimer);
        }
      }
    });
  }

  startCounter():void {
    if (this.starterStopper.value && this.shadowTimer>=0) {
      if (this.pauser.value) {
        console.log('resume');
        this.updateResume.emit('yes');
        this.pauser.next(false);
      } else {
        console.log('pause');
        this.updatePause.emit('yes');
        this.pauser.next(true);
      }
    } else if(this.shadowTimer>0) {
      console.log('start');
      this.updateResume.emit('yes');
      this.starterStopper.next(true);
    }
  }
  updateTimer(e:any):void {
    this.shadowTimer = this.timerValue;
  }

  resetCounter():void {
    this.starterStopper.next(false);
    this.pauser.next(false);
    this.counter$.next(0);
    this.timerValue = 0;
    this.shadowTimer=0;
    this.counterTime.emit(this.timerValue);
    this.clickLogs=[];
    this.resetData.emit();
  }
}
