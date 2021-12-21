import { ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.scss']
})
export class RouteFiveComponent implements OnInit {
  rows:any =[
    {
      "Name": "Dorothy",
      "Class": 2,
      "Section": "secB",
      "sub1": 17,
      "sub2": 18,
      "sub3": 20,
      "sub4": 6,
      "id": 1
    },
    {
      "Name": "Nina",
      "Class": 8,
      "Section": "secB",
      "sub1": 18,
      "sub2": 21,
      "sub3": 23,
      "sub4": 40,
      "id": 8
    },
    {
      "Name": "Osborn",
      "Class": 6,
      "Section": "secB",
      "sub1": 40,
      "sub2": 18,
      "sub3": 15,
      "sub4": 14,
      "id": 3
    },
    {
      "Name": "Aisha",
      "Class": 5,
      "Section": "secB",
      "sub1": 19,
      "sub2": 25,
      "sub3": 38,
      "sub4": 3,
      "id": 7
    },
    {
      "Name": "Hurley",
      "Class": 9,
      "Section": "secB",
      "sub1": 12,
      "sub2": 9,
      "sub3": 9,
      "sub4": 26,
      "id": 8
    },
    {
      "Name": "Jaime",
      "Class": 9,
      "Section": "secB",
      "sub1": 8,
      "sub2": 22,
      "sub3": 30,
      "sub4": 13,
      "id": 1
    },
    {
      "Name": "Giles",
      "Class": 7,
      "Section": "secB",
      "sub1": 23,
      "sub2": 32,
      "sub3": 15,
      "sub4": 33,
      "id": 4
    },
    {
      "Name": "Armstrong",
      "Class": 10,
      "Section": "secB",
      "sub1": 10,
      "sub2": 26,
      "sub3": 13,
      "sub4": 11,
      "id": 2
    },
    {
      "Name": "Colon",
      "Class": 7,
      "Section": "secB",
      "sub1": 38,
      "sub2": 5,
      "sub3": 26,
      "sub4": 12,
      "id": 10
    },
    {
      "Name": "Jean",
      "Class": 2,
      "Section": "secB",
      "sub1": 28,
      "sub2": 13,
      "sub3": 10,
      "sub4": 25,
      "id": 3
    }
  ];
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
