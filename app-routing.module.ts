import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './Components/home/home.component';
import { WidgetsComponent } from './Components/widgets/widgets.component'; 
import { ReviewsComponent } from './Components/reviews/reviews.component';

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