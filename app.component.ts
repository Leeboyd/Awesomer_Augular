import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = ' MABOW REST App';
  generalLinks = [
    { title: '課程', path: '/courses' }
  ];
  links = [
    { path: '/widgets', icon: 'view_quilt', label: 'Widgets'},
    { path: '/home', icon: 'home', label: 'Home'},
    { path: '/grid', icon: 'apps', label: 'Grid' },
    { path: '/myform', icon: 'border_clear', label: 'SimpleForm'},
    { path: '/lazy/baby', icon: 'airline_seat_recline_normal', label: 'Lazy'},
    { path: '/cars', icon: 'hotel', label: 'Car'}
  ];

  constructor() {}

  ngOnInit() {}
}