import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template:
   `
    <ul>
      <li>3.5-liter Direct Injection Gasoline™ [{{parentRouteId}}]</li>
      <li>SiriusXM® Travel Link with 3-year complimentary trial access [{{parentRouteId}}]</li>
      <li>Automatic Emergency Braking [{{parentRouteId}}]</li>
      <li>Tri-Zone Automatic Temperature Control System</li>
    </ul>
  `
})
export class CarSpecsComponent implements OnInit, OnDestroy  {
  parentRouteId: number;
  subscription: any;
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit () {
    this.subscription = this._route.parent.params
    .subscribe(params => {
      this.parentRouteId = Number(params['id']);
    });
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}
