import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatDividerModule,
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  // imports: [MatButtonModule],
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class AppMaterialModule {
}
