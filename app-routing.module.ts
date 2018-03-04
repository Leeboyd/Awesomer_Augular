import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './Components/home/home.component'
import { WidgetsComponent } from './Components/widgets/widgets.component'
import { ReviewsComponent } from './Components/reviews/reviews.component'
import { CarOverviewComponent } from './Components/reviews/car-overview/car-overview.component';
import { CarSpecsComponent } from './Components/reviews/car-specs/car-spec.component';
import { CarPartsComponent } from './Components/reviews/car-part/car-part.component';


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
    path: 'widgets',
    component: WidgetsComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
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