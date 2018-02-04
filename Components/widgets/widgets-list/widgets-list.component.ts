import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '../widgets.interface'
@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent {
  @Input() widgets: Widget[]
  @Input() readonly: Boolean = false
  @Output() selected = new EventEmitter()
  @Output() deleted = new EventEmitter()
}
