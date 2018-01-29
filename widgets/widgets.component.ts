import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  color: string = 'blue'

  constructor() { }

  ngOnInit() {
  }

  echo(message) {
    console.log(`COLOR: ${message}`)
  }
}
