import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-cards',
  templateUrl: './courses-cards.component.html'
})
export class CoursesCardsComponent {

  constructor (
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  navigate (path) {
    this._router.navigate([
      {
        outlets: {
          primary: path,
          sidemenu: path
        }
      }
    ],
    {
      relativeTo: this._route
    });
  }
}
