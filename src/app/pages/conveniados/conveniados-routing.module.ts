import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConveniadoFormComponent } from './conveniado-form/conveniado-form.component';
import { ConveniadoListComponent } from './conveniado-list/conveniado-list.component';

const routes: Routes = [
  { path: '', component: ConveniadoListComponent },
  { path: 'new', component: ConveniadoFormComponent },
  { path: ':id/edit', component: ConveniadoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConveniadosRoutingModule { }
