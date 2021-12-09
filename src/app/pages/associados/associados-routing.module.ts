import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociadoFormComponent } from './associado-form/associado-form.component';
import { AssociadoListComponent } from './associado-list/associado-list.component';


const routes: Routes = [
  { path: '', component: AssociadoListComponent },
  { path: 'new', component: AssociadoFormComponent },
  { path: ':id/edit', component: AssociadoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociadosRoutingModule { }
