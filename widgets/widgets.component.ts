import { Component, OnInit } from '@angular/core';
import { WidgetsService } from './widgets.services'
import { Widget } from './widgets.interface'

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  providers: [WidgetsService]
})
export class WidgetsComponent implements OnInit {
  selectedWidget;
  widgets: Widget[]

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.widgets
  }

  selected (widget) {
    this.selectedWidget = widget
  }
}
