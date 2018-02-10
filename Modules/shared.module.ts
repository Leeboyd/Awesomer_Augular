import { ModuleWithProviders, NgModule } from '@angular/core'
import { AppMaterialModule } from './material/app-material.module'
import { CounterService } from './counter.service';

@NgModule({
  imports: [
    AppMaterialModule
  ],
  exports: [
    AppMaterialModule
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CounterService]
    }
  }
}