import { Component } from "@angular/core";
import { BaseResourceListComponent } from "src/app/shared/components/base-resource-list/base-resource-list.component";
import { Prestador } from "../shared/prestador.model";
import { PrestadorService } from "../shared/prestador.service";

@Component({
  selector: "prestador-list",
  templateUrl: "prestador-list.component.html"
})
export class PrestadorListComponent extends BaseResourceListComponent<Prestador> { 

  constructor(private prestadorService: PrestadorService) { 
    super(prestadorService);
  }
}
