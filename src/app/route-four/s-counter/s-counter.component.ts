import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-s-counter',
  templateUrl: './s-counter.component.html',
  styleUrls: ['./s-counter.component.scss']
})
export class SCounterComponent implements OnInit {
  pauseVal:number = 0;
  startVal:number = 0;
  constructor(public countProvider:SharedService) { }

  ngOnInit(): void {
    this.countProvider.pauseCounter$.subscribe(x=> this.pauseVal=x);
    this.countProvider.startCounter$.subscribe(x=> this.startVal=x);
  }

}
