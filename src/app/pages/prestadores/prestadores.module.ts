import { PrestadorFormComponent } from './prestador-form/prestador-form.component';
import { PrestadorListComponent } from './prestador-list/prestador-list.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestadoresRoutingModule } from './prestadores-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
@NgModule({
  declarations: [PrestadorListComponent, PrestadorFormComponent],
  imports: [
    CommonModule,
    PrestadoresRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgBrazil,
    TextMaskModule
  ]
})
export class PrestadoresModule { }
