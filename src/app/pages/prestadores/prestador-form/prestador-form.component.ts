import { Component, Injector } from "@angular/core";
import { Validators } from "@angular/forms";
import { NgBrazilValidators } from "ng-brazil";
import { BaseResourceFormComponent } from "src/app/shared/components/base-resource-form/base-resource-form.component";
import { Prestador } from "../shared/prestador.model";
import { PrestadorService } from "../shared/prestador.service";

@Component({
  selector: "prestador-form",
  templateUrl: "prestador-form.component.html"
})
export class PrestadorFormComponent extends BaseResourceFormComponent<Prestador> {

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      tipo: ['', [Validators.required]]
    });
  }
  
  constructor(protected prestadorService: PrestadorService, protected injector: Injector) { 
    super(injector, new Prestador(), prestadorService, Prestador.fromJson)
  }
}
