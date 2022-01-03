import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConveniadoListComponent } from './conveniado-list/conveniado-list.component';
import { ConveniadoFormComponent } from './conveniado-form/conveniado-form.component';
import { ConveniadosRoutingModule } from './conveniados-routing.module';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [ConveniadoListComponent, ConveniadoFormComponent],
  imports: [
    CommonModule,
    ConveniadosRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgBrazil,
    TextMaskModule
  ]
})
export class ConveniadosModule { }
