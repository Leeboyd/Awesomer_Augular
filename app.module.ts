// ng API
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module'
import { AppMaterialModule } from './app-material.module';

// My Component
import { AppComponent } from './app.component';
import { WidgetsComponent } from './Components/widgets/widgets.component'; 

 
// Directive 

 
// Service 
import { WidgetsService } from './Services/services';

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
  providers: [
    WidgetsService
  ], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 