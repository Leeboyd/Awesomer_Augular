import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template:
   `
    <div>
      Showing Model ID for product: {{ id }}
    </div>
  `
})
export class ReviewsCarComponent implements OnInit, OnDestroy  {
  id: number
  sub: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit () {
    this.sub = this.route.params.subscribe(params => {
      this.id = Number(params['id'])
    })
  }

  ngOnDestroy () {
    this.sub.unsubscribe()
  }
}
