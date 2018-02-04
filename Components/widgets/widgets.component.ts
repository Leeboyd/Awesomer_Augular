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

  selectWidget (widget) {
    this.selectedWidget = widget
  }

  deleteWidget (widget) {
    console.log(`刪除功能`)
  }

  saveWidget (widget) {
    console.log(`Successfully update: ${JSON.stringify(widget)}`) 
    this.reset() 
  }
}
