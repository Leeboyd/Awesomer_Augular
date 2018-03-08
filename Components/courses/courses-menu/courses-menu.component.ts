import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-menu',
  templateUrl: './courses-menu.component.html'
})
export class CoursesMenuComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => console.log('side menu id parameter', params['section']));
  }

}
