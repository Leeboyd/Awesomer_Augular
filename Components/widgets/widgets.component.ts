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
    this.getWidgets()
    this.reset()
  }

  getWidgets () {
    this.widgetsService.get_all()
      .subscribe(widgets => this.widgets = widgets)
  }

  reset() {
    this.selectedWidget = { id: null, name: '', description: ''}
  }

  selectWidget (widget) {
    this.selectedWidget = widget
  }

  saveWidget (widget) {
    if (!widget.id) {
      this.execute(widget, 'create')
    } else {
      this.execute(widget, 'update')
    }
  }

  execute (widget, action) {
    this.widgetsService[action](widget)
      .subscribe(result => {
        this.getWidgets()
        this.reset()
        console.log(`Successfully ${action}: ${JSON.stringify(widget)}`) 
      })
  }

  // createWidget (widget) {
  //   this.widgetsService.create(widget)
  //     .subscribe(result => {
  //       this.getWidgets()
  //       this.reset()
  //       console.log(`Successfully create: ${JSON.stringify(widget)}`) 
  //     })
  // }

  // updateWidget (widget) {
  //   this.widgetsService.update(widget)
  //     .subscribe(result => {
  //       this.getWidgets()
  //       this.reset()
  //       console.log(`Successfully update: ${JSON.stringify(widget)}`) 
  //     })
  // }

  deleteWidget (widget) {
    this.widgetsService.delete_by(widget)
      .subscribe(result => {
        this.getWidgets()
        this.reset()
        console.log(`Successfully 刪除: ${JSON.stringify(widget)}`)
      })
  }
}
