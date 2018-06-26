import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule, MatGridListModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
