import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module'
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoAccessComponent } from './components/no-access/no-access.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    LandingComponent, 
    PageNotFoundComponent, 
    NoAccessComponent
  ],
  exports: [
    LandingComponent, 
    PageNotFoundComponent, 
    NoAccessComponent
  ]
})
export class SharedModule { }
