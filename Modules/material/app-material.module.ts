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
  MatSelectModule,
  MatCheckboxModule
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
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class AppMaterialModule {
}
