import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-line',
  templateUrl: './grid-line.component.html',
  styleUrls: ['./grid-line.component.css']
})
export class GridLineComponent implements OnInit {
  colors = ['Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan'];
  constructor() { }

  ngOnInit() {
  }

  setMyClasses (i) {
    let classes = {
      item0: i == 0,
      item2: i == 2,
      item3: i == 3
    };
    return classes;
  }

}
