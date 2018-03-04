import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  template:
   `
    <ul>
      <li *ngFor="let part of parts">{{ part }}</li>
    </ul>
  `
})
export class CarPartsComponent implements OnInit, OnDestroy  {
  parts = ['Safety Signs', 'Wall Plugs', 'Frame & Hammer', 'Fixings Heavy Duty', 'Fixings Hooks & Eyes']
  constructor() { }

  ngOnInit () {}

  ngOnDestroy () {}
}
