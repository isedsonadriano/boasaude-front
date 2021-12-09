import { Component } from "@angular/core";
import { BaseResourceListComponent } from "src/app/shared/components/base-resource-list/base-resource-list.component";
import { Associado } from "../shared/associado.model";
import { AssociadoService } from "../shared/associado.service";


@Component({
  selector: "associado-list",
  templateUrl: "associado-list.component.html"
})
export class AssociadoListComponent extends BaseResourceListComponent<Associado> { 

  constructor(private associadoService: AssociadoService) { 
    super(associadoService);
  }
}
