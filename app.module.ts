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
import { WidgetsListComponent } from './Components/widgets/widgets-list/widgets-list.component';
import { WidgetDetailsComponent } from './Components/widgets/widget-details/widget-details.component';

import { ReviewsComponent } from './Components/reviews/reviews.component';
 
// Directive 

 
// Service 
import { WidgetsService } from './Services/services';
import { HomeComponent } from './Components/home/home.component';



@NgModule({ 
  declarations: [ 
    AppComponent,
    WidgetsComponent,
    ReviewsComponent,
    HomeComponent,
    WidgetsListComponent,
    WidgetDetailsComponent,
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