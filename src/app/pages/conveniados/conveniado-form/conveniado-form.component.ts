import { Component, Injector } from "@angular/core";
import { Validators } from "@angular/forms";
import { NgBrazilValidators } from "ng-brazil";
import { BaseResourceFormComponent } from "src/app/shared/components/base-resource-form/base-resource-form.component";
import { Conveniado } from "../shared/conveniado.model";
import { ConveniadoService } from "../shared/conveniado.service";

@Component({
  selector: "conveniado-form",
  templateUrl: "conveniado-form.component.html"
})
export class ConveniadoFormComponent extends BaseResourceFormComponent<Conveniado>  {
  
  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      cnpj: ['', [Validators.required, NgBrazilValidators.cnpj]],
      tipo: ['', [Validators.required]]
    });
  }
  
  constructor(protected conveniadoService: ConveniadoService, protected injector: Injector) { 
    super(injector, new Conveniado(), conveniadoService, Conveniado.fromJson)
  }

}
