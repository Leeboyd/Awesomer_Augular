import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyFormRoutingModule } from './myform-routing.module';
import { SharedModule } from '@app/Modules/shared.module';

import { MyFormComponent } from './myform.component'
import { SimpleFormComponent } from './Components/simple-form/simple-form.component';

import { Routes, RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyFormRoutingModule,
    SharedModule
  ],
  declarations: [
    MyFormComponent,
    SimpleFormComponent
  ]
})
export class MyformModule {}
