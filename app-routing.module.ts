import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { WidgetsComponent } from './Components/widgets/widgets.component'; 

const routes: Routes = [
  {
    path: '',
    component: WidgetsComponent
  },
  {
    path: 'widgets',
    component: WidgetsComponent
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