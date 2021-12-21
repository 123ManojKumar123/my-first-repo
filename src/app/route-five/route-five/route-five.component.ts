import { ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.scss']
})
export class RouteFiveComponent implements OnInit {
  rows:any =[
    {
      "Section": "secB",
      "Name": "Delacruz",
      "sub1": 40,
      "sub2": 21,
      "sub3": 16,
      "sub4": 31,
      "id": 1,
      "Class": 10
    },
    {
      "Section": "secB",
      "Name": "Vega",
      "sub1": 26,
      "sub2": 8,
      "sub3": 40,
      "sub4": 11,
      "id": 11,
      "Class": 5
    },
    {
      "Section": "secB",
      "Name": "Elisabeth",
      "sub1": 12,
      "sub2": 28,
      "sub3": 22,
      "sub4": 27,
      "id": 6,
      "Class": 11
    },
    {
      "Section": "secB",
      "Name": "Charlotte",
      "sub1": 21,
      "sub2": 37,
      "sub3": 38,
      "sub4": 34,
      "id": 11,
      "Class": 2
    },
    {
      "Section": "secB",
      "Name": "Rene",
      "sub1": 12,
      "sub2": 30,
      "sub3": 7,
      "sub4": 10,
      "id": 5,
      "Class": 7
    },
    {
      "Section": "secB",
      "Name": "Osborn",
      "sub1": 5,
      "sub2": 28,
      "sub3": 36,
      "sub4": 31,
      "id": 7,
      "Class": 11
    },
    {
      "Section": "secB",
      "Name": "Kirkland",
      "sub1": 15,
      "sub2": 14,
      "sub3": 17,
      "sub4": 21,
      "id": 11,
      "Class": 2
    },
    {
      "Section": "secB",
      "Name": "Tamera",
      "sub1": 23,
      "sub2": 13,
      "sub3": 40,
      "sub4": 7,
      "id": 4,
      "Class": 4
    },
    {
      "Section": "secB",
      "Name": "Olsen",
      "sub1": 33,
      "sub2": 33,
      "sub3": 16,
      "sub4": 8,
      "id": 11,
      "Class": 10
    },
    {
      "Section": "secB",
      "Name": "Bishop",
      "sub1": 29,
      "sub2": 38,
      "sub3": 10,
      "sub4": 26,
      "id": 4,
      "Class": 2
    }
  ]
  headers = [];
  sortedColumn!:string;
  order!:string;
  sortedArr: any;
  shadowRows!: any[];
  oRows!: any;
  constructor(private cdChanges:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.oRows = this.rows;
  }

  getHeaders() {
    let headers: string[] = [];
    if(this.rows) {
      this.rows.forEach((value:any) => {
        Object.keys(value).forEach((key) => {
          if(!headers.find((header) => header == key)){
            headers.push(key)
          }
        })
      })
    }
    return headers;
  }

  title = 'CustomTable';
  sortBy(columnName:string):void {
    this.order = (this.sortedColumn===columnName && this.order ==='norm') ? 'asc'
    : (this.sortedColumn===columnName && this.order ==='asc') ? 'desc' 
    : (this.sortedColumn===columnName && this.order ==='desc') ? 'norm' : 'asc'
    this.shadowRows = [...this.rows];
    if(this.order==='asc') {
      this.sortedArr = this.shadowRows.sort((a:any, b:any) => {
        if(a[columnName] > b[columnName]) {
          return 1;
        } else if(a[columnName] < b[columnName]) {
          return -1;
        } else {
          return 0;
        }
    });
    }
    if(this.order==='desc') {
      this.sortedArr = this.shadowRows.sort((a:any, b:any) => {
        if(a[columnName] > b[columnName]) {
          return -1;
        } else if(a[columnName] < b[columnName]) {
          return 1;
        } else {
          return 0;
        }
    });
    }
    if(this.order ==='norm'){
      this.sortedArr = this.oRows;
    }
    this.sortedColumn = columnName;
    this.rows = [...this.sortedArr];
  }
}

export interface Sudent {
  Class: number;
  Name: string;
  sub1: number;
  sub2: number;
  sub3: number;
  sub4: number;
  id: number;
  Section: string;
}
