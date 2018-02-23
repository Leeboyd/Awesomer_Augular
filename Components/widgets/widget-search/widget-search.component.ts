import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { WidgetsService } from '@app/Services/widgets.services'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-widget-search',
  templateUrl: './widget-search.component.html',
  styleUrls: ['./widget-search.component.css']
})
export class WidgetSearchComponent implements OnInit {
  @Output() onResults = new EventEmitter()
  @ViewChild('widgetSearch') widgetSearch

  constructor (private widgetService: WidgetsService) {
  }

  ngOnInit() {
    let search$ = Observable.fromEvent(this.getNativeElement(this.widgetSearch), 'keyup')
      .debounceTime(2000)
      .distinctUntilChanged()
      .map((event: any) => event.target.value)
      .switchMap(query => this.widgetService.search(query))
      .subscribe(widgets => this.onResults.emit(widgets))
  }

  getNativeElement (element) {
    return element.nativeElement
  }

}
