import { Component } from "@angular/core";
import { BaseResourceListComponent } from "src/app/shared/components/base-resource-list/base-resource-list.component";
import { Conveniado } from "../shared/conveniado.model";
import { ConveniadoService } from "../shared/conveniado.service";


@Component({
  selector: "conveniado-list",
  templateUrl: "conveniado-list.component.html"
})
export class ConveniadoListComponent extends BaseResourceListComponent<Conveniado> { 

  constructor(private conveniadoService: ConveniadoService) { 
    super(conveniadoService);
  }
}
