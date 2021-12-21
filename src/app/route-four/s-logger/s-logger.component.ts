import { Component, OnInit, Input} from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-s-logger',
  templateUrl: './s-logger.component.html',
  styleUrls: ['./s-logger.component.scss']
})
export class SLoggerComponent implements OnInit {

  @Input()logList!:string[];
  constructor(public logProvider:SharedService) { }

  ngOnInit(): void {
    this.logProvider.logData$.subscribe(x=> this.logList=[...x]);
  }

}
