import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '@app/Services/widgets.services'
import { Widget } from './widgets.interface'
@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  selectedWidget: Widget;
  widgets: Widget[];

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.widgets
    this.reset()
  }

  reset() {
    this.selectedWidget = { id: null, name: '', description: ''}
  }

  selected (widget) {
    this.selectedWidget = widget
  }

  save (widget) {
    console.log(`Successfully update: ${JSON.stringify(widget)}`) 
    this.reset() 
  }
}
