import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchoolsComponent } from './schools/schools.component';

const routes: Routes = [
  { path: '', component: SchoolsComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }

