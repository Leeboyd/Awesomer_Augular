// ng API
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// My Module
import { AppRoutingModule } from './app-routing.module'
// import { AppMaterialModule } from './app-material.module';
import { SharedModule } from './Modules/shared.module'
// import { MyformModule } from './Modules/myform/myform.module'


// My Component
import { AppComponent } from './app.component';
import { WidgetsComponent } from './Components/widgets/widgets.component';
import { WidgetsListComponent } from './Components/widgets/widgets-list/widgets-list.component';
import { WidgetDetailsComponent } from './Components/widgets/widget-details/widget-details.component';
import { WidgetSearchComponent } from './Components/widgets/widget-search/widget-search.component';

import { CarsComponent } from './Components/cars/cars.component';
import { CarOverviewComponent } from './Components/cars/car-overview/car-overview.component';
import { CarSpecsComponent } from './Components/cars/car-specs/car-spec.component';
import { CarPartsComponent } from './Components/cars/car-part/car-part.component';

import { StatusComponent } from './Components/status/status.component';

import { CoursesComponent } from './Components/courses/courses.component';
import { CoursesCardsComponent } from './Components/courses/courses-cards/courses-cards.component';
import { CoursesMenuComponent } from './Components/courses/courses-menu/courses-menu.component';
import { CoursesCategoryComponent } from './Components/courses/courses-category/courses-category.component';

// Directive


// Service
import { WidgetsService } from './Services/services';
import { HomeComponent } from './Components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    CarsComponent,
    CarOverviewComponent,
    CarSpecsComponent,
    CarPartsComponent,
    HomeComponent,
    WidgetsListComponent,
    WidgetDetailsComponent,
    WidgetSearchComponent,
    StatusComponent,
    CoursesComponent,
    CoursesCardsComponent,
    CoursesMenuComponent,
    CoursesCategoryComponent
  ],
  imports: [
    // Ng
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpModule,
    // AppMaterialModule,
    SharedModule.forRoot()
  ],
  providers: [
    WidgetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }