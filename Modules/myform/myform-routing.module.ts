import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { MyFormComponent } from './myform.component'
import { SimpleFormComponent } from './Components/simple-form/simple-form.component';

const formRoutes: Routes = [
  {
    path: '',
    component: MyFormComponent,
    pathMatch: 'prefix',
    children: [
      { 
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'simple' 
      },
      {
        path: 'simple',
        component: SimpleFormComponent
      },
      // {
      //   path: '**',
      //   redirectTo: 'simple',
      //   pathMatch: 'full'
      // }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(formRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MyFormRoutingModule {

}