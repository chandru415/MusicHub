import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { MaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './components/nav/nav.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedEffects } from './store/effects/shared.effects';
import * as sharedRoot from './store';



@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forFeature('shared', sharedRoot.reducercombine),
    EffectsModule.forFeature([SharedEffects])
  ],
  declarations: [
    LandingComponent,
    PageNotFoundComponent,
    NoAccessComponent,
    NavComponent
  ],
  exports: [
    LandingComponent,
    PageNotFoundComponent,
    NoAccessComponent
  ]
})
export class SharedModule { }
