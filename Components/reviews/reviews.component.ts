import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  title = 'Car model list!';
  modelList: Array<object> = [{
    'id': 1,
    'model': 'Pathfinder'
  }, {
    'id': 2,
    'model': 'Tucson'
  }, {
    'id': 3,
    'model': 'Galaxie'
  }, {
    'id': 4,
    'model': 'F430'
  }, {
    'id': 5,
    'model': 'A4'
  }];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  hardCodeRouting () {
    this.router.navigate(['/car-overview', 1]);
  }
}
