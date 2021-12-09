import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrestadorFormComponent } from './prestador-form/prestador-form.component';
import { PrestadorListComponent } from './prestador-list/prestador-list.component';


const routes: Routes = [
  { path: '', component: PrestadorListComponent },
  { path: 'new', component: PrestadorFormComponent },
  { path: ':id/edit', component: PrestadorFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestadoresRoutingModule { }
