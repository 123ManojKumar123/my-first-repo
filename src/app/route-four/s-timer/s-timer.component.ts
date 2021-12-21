import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { BehaviorSubject, NEVER, Observable, Observer, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { SharedService } from '../shared.service';

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
  selector: 'app-s-timer',
  templateUrl: './s-timer.component.html',
  styleUrls: ['./s-timer.component.scss']
})
export class STimerComponent implements OnInit {
  pauser = new BehaviorSubject<boolean>(false);
  starterStopper = new BehaviorSubject<boolean>(false);
  timerValue!:number;
  shadowTimer!:number;
  counter$ = new BehaviorSubject<number>(0);
  constructor(public dataServcice:SharedService) { }

  ngOnInit(): void {
    timerWithPause(this.starterStopper, this.pauser, this.shadowTimer).subscribe({
      next: () => {
        if(this.shadowTimer>0){
          this.counter$.next(--this.shadowTimer)
          this.dataServcice.updateTimerVal(this.shadowTimer);
        }
      }
    });
  }

  startCounter():void {
    if (this.starterStopper.value && this.shadowTimer>=0) {
      if (this.pauser.value) {
        console.log('resume');
        this.dataServcice.updateResumeVal('yes');
        this.pauser.next(false);
      } else {
        console.log('pause');
        this.dataServcice.updatePauseVal('yes');
        this.pauser.next(true);
      }
    } else if(this.shadowTimer>0) {
      console.log('start');
      this.dataServcice.updateResumeVal('yes');
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
    this.dataServcice.updateTimerVal(this.shadowTimer);
    this.dataServcice.resetDataVal();
  }
}
