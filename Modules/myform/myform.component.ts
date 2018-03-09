import { Component, style } from '@angular/core'

@Component({
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})

export class MyFormComponent {
  constructor () {
    console.log('hi, myform')
  }
}

