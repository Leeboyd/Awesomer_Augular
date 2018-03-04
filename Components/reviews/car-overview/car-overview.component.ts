import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-car-overview',
  templateUrl: './car-overview.component.html'
})
export class CarOverviewComponent implements OnInit, OnDestroy  {
  id: number;
  subscription: any;
  constructor(private _route: ActivatedRoute) {}

  ngOnInit () {
    this.subscription = this._route.params
    .subscribe(params => {
      this.id = Number(params['id']);
    });
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}
