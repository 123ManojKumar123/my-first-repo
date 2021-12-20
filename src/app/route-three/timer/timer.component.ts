import { Component, OnInit } from '@angular/core';
import { Observable, Subject, timer } from "rxjs";
import { map, switchMap, take, tap } from "rxjs/operators";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timerValue!:number;
  isLoggerRequired = false;
  counter$ = new Observable<number>();
  suscribe:any;
  constructor() { }

  ngOnInit(): void {
  }
  updateTimer(event:any):void {
    console.log('called',event);
  }
  startCounter():void {
    if(!!this.counter$) {
      console.log('paused');

    } else {
      console.log('lol');
      this.counter$ = timer(0,1000).pipe(take(this.timerValue),map(()=> --this.timerValue));

    //    this.suscribe = this.counter$.pipe(
    //     switchMap(({ timerValue }) =>
    //       timer(0, 1000).pipe(
    //         take(timerValue),
    //         tap(() => 
    //         // this.value.emit(--timerValue))
    //         --this.timerValue
    //       )
    //     )
    //   ).subscribe()
    // }
    }
  }
  resetCounter():void {
    console.log('reset bro');
  }
}
