import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './Components/home/home.component';
import { WidgetsComponent } from './Components/widgets/widgets.component'; 
import { ReviewsComponent } from './Components/reviews/reviews.component';

import { MyFormComponent } from './Modules/myform/myform.component'
import { SimpleFormComponent } from './Modules/myform/Components/simple-form/simple-form.component';

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
  // {
  //   path: 'myform',
  //   loadChildren: './Modules/myform/myform.module#MyformModule' 
  // },
  {
    path: 'myform',
    component: MyFormComponent,
    children: [
      {
        path: 'simple',
        component: SimpleFormComponent
      },
      {
        path: '**',
        redirectTo: 'simple',
        pathMatch: 'full'
      }
    ]
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