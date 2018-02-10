import {Component, NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';
import { CounterService } from '../counter.service';

@Component({
  template:  `
    <h1>lazy Child</h1>
    <button (click)="increaseCounter()">Increase Counter</button>
  `
})
export class LazyChildComponent {
  constructor(public counterService: CounterService) {}
  increaseCounter() {
    this.counterService.counter += 1;
    console.log(`Counter: ${this.counterService.counter}`)
  }  
}

@Component({
  template: `
    <h1>lazy Baby</h1>
    <button (click)="increaseCounter()">Increase Counter</button>
  `
})
export class LazyBabyComponent {
  constructor(public counterService: CounterService) {}
  increaseCounter() {
    this.counterService.counter += 1;
    console.log(`Counter: ${this.counterService.counter}`)
  }  
}


@Component({
  template: 
  `
    <a mat-button routerLink="child" routerLinkActive="active"><mat-icon>airline_seat_flat_angled</mat-icon> Default Child Route</a>
    <a mat-button routerLink="baby" routerLinkActive="active"><mat-icon>airline_seat_flat</mat-icon> Other Baby Route</a>
    <h2>Parent Counter: {{ counterService.counter }}</h2>
    <router-outlet></router-outlet>
  `
})
export class LazyParentComponent {
  constructor(public counterService: CounterService) {}
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
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [LazyChildComponent, LazyBabyComponent, LazyParentComponent]
})

export class LazyModule { }