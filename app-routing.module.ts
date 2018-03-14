import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './Components/home/home.component'
import { WidgetsComponent } from './Components/widgets/widgets.component'
import { CarsComponent } from './Components/cars/cars.component';
import { CarOverviewComponent } from './Components/cars/car-overview/car-overview.component';
import { CarSpecsComponent } from './Components/cars/car-specs/car-spec.component';
import { CarPartsComponent } from './Components/cars/car-part/car-part.component';

import { CoursesComponent } from './Components/courses/courses.component';
import { CoursesCardsComponent } from './Components/courses/courses-cards/courses-cards.component';
import { CoursesMenuComponent } from './Components/courses/courses-menu/courses-menu.component';
import { CoursesCategoryComponent } from './Components/courses/courses-category/courses-category.component';

import { GridComponent } from './Components/grid/grid.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'widgets',
    component: WidgetsComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'car-overview/:id',
    component: CarOverviewComponent,
    children: [
      {
        path: '',
        redirectTo: 'parts',
        pathMatch: 'full'
      },
      {
        path: 'parts',
        component: CarPartsComponent
      },
      {
        path: 'specs',
        component: CarSpecsComponent
      }
    ]
  },
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: '',
        component: CoursesCardsComponent
      },
      {
        path: ':section',
        component: CoursesCategoryComponent
      },
      {
        path: '',
        outlet: 'sidemenu',
        component: CoursesMenuComponent
      },
      {
        path: ':section',
        outlet: 'sidemenu',
        component: CoursesMenuComponent
      }
    ]
  },
  {
    path: 'myform',
    loadChildren: './Modules/myform/myform.module#MyformModule' 
  },
  {
    path: 'lazy',
    loadChildren: './Modules/lazy/lazy.module#LazyModule'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}