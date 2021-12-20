import { Component, OnInit } from '@angular/core';
import { concatWith, Observable, of } from 'rxjs';

@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.scss']
})
export class RouteSixComponent implements OnInit {
  dynamicArray$=of([1,2,3,4,5,6,7,8,9,10]);
  constArr = [1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
  }

  onScroll() {
    this.generateDivs();
    this.dynamicArray$ = of([...this.constArr]);
  }

  generateDivs():void{
    this.constArr = [...this.constArr,...this.constArr];
  }

  createAlert(val:number):void {
    alert('clicked on '+ ++val);
  }
}
