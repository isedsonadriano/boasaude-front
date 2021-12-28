import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AssociadoListComponent } from './associado-list/associado-list.component';
import { AssociadoFormComponent } from './associado-form/associado-form.component';
import { AssociadosRoutingModule } from './associados-routing.module';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';



@NgModule({
  declarations: [AssociadoListComponent, AssociadoFormComponent],
  imports: [
    CommonModule,
    AssociadosRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgBrazil,
    TextMaskModule,
  ]
})
export class AssociadosModule { }
