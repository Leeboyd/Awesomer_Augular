import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  widgets = []
  currentStatus = 'active'
  constructor() { }

  ngOnInit() {
  }

  handlerResult (widgets) {
    this.widgets = widgets
  }

  logout () {
    this.currentStatus = 'LOG OUT'
  }
}
