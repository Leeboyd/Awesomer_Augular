import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
 
import { AppRoutingModule } from './app-routing.module'
import { AppMaterialModule } from './app-material.module';

import { AppComponent } from './app.component';
import { WidgetsComponent } from './widgets/widgets.component'; 

 
// Directive 

 
// Service 

@NgModule({ 
  declarations: [ 
    AppComponent,
    WidgetsComponent,
  ], 
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AppMaterialModule
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 