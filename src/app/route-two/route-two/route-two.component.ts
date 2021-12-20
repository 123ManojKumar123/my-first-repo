import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.scss']
})
export class RouteTwoComponent implements OnInit {

  constructor() { }
  widthVal="25";
  ngOnInit(): void {
  }

  changeLayout(type:string) {
    this.widthVal = type === 'list'? '100': '25';
  }
}
