import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../Services/widgets.services'
@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  selectedWidget;
  widgets;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.widgets
  }

  selected (widget) {
    this.selectedWidget = widget
  }
}
