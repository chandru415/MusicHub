import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoAccessComponent } from './components/no-access/no-access.component';

const routes: Routes = [
  {path: '', component: LandingComponent, children: [
   // {path: '', component: LandingComponent},
    {path: 'noaccess', component: NoAccessComponent},
    {path: '**', component: PageNotFoundComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
