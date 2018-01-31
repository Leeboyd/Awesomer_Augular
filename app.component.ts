import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = ' MABOW REST App';
  links = [
    { path: '/widgets', icon: 'view_quilt', label: 'Widgets'},
    { path: '/home', icon: 'home', label: 'Home'},
    { path: 'reviews', icon: 'hotel', label: 'Review'}
  ];

  constructor() {}

  ngOnInit() {}
}