import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewing',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewingComponent implements OnInit {
  title: string = 'MABOW is the heat!'
  constructor() { }

  ngOnInit() {
  }

}
