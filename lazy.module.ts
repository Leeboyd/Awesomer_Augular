import {Component, NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

@Component({
  template: 'lazy Child'
})
export class LazyChildComponent {
  
}

@Component({
  template: 'lazy Baby'
})
export class LazyBabyComponent {
  
}


@Component({
  template: 
  `
    <a routerLink="child" routerLinkActive="active">Default Child Route</a>
    <a routerLink="baby" routerLinkActive="active">Other Baby Route</a>
    <router-outlet></router-outlet>
  `
})
export class LazyParentComponent {
  constructor(){
    console.log('hi, lazy')
  }
}

const routes: Routes = [
  {
    path: '', component: LazyParentComponent, pathMatch: 'prefix',
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'child'
      },
      {
        path: 'child', component: LazyChildComponent
      },
      {
        path: 'baby', component: LazyBabyComponent
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [LazyChildComponent, LazyBabyComponent, LazyParentComponent]
})

export class LazyModule { }