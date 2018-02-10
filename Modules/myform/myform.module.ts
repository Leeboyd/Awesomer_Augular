import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFormRoutingModule } from './myform-routing.module';

import { MyFormComponent } from './myform.component'
import { SimpleFormComponent } from './Components/simple-form/simple-form.component';

import { Routes, RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    MyFormRoutingModule
  ],
  declarations: [
    MyFormComponent,
    SimpleFormComponent
  ]
})
export class MyformModule {}
