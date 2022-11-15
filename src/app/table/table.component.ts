import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {

  data:Array<any>
  People:any;


  constructor() {
    this.data=[
      { firstName: 'sam', lastName: 'doe', age: '20'},
      { firstName: 'knight', lastName: 'smith', age: '35'},
      { firstName: 'mage', lastName: 'david', age: '27'},
      { firstName: 'clerik', lastName: 'jordan', age: '42'},
      { firstName: 'frodo', lastName: 'blake', age: '29'}
    ];
  }

}
