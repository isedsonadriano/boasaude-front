import { Component, Injector } from "@angular/core";
import { Validators } from "@angular/forms";
import { NgBrazilValidators } from "ng-brazil";

import { BaseResourceFormComponent } from "src/app/shared/components/base-resource-form/base-resource-form.component";
import { Associado } from "../shared/associado.model";
import { AssociadoService } from "../shared/associado.service";

@Component({
  selector: "associado-form",
  templateUrl: "associado-form.component.html"
})
export class AssociadoFormComponent extends BaseResourceFormComponent<Associado>  {
 
  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      numeroCarteira: ['', [Validators.required, Validators.minLength(14)]],
      tipoPlano: ['', [Validators.required]],
      telefone: ['', [Validators.required, NgBrazilValidators.telefone]],
      dataNascimento: ['', [Validators.required]],
      nomeDaMae: ['', [Validators.required]],
      rg: ['', [Validators.required]],
      titular: ['', [Validators.required]],
    });
  }
  
  constructor(protected associadoService: AssociadoService, protected injector: Injector) { 
    super(injector, new Associado(), associadoService, Associado.fromJson)
  }
}
