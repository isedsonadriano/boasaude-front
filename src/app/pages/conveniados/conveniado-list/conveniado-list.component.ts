import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BaseResourceListComponent } from "src/app/shared/components/base-resource-list/base-resource-list.component";
import { Conveniado } from "../shared/conveniado.model";
import { ConveniadoService } from "../shared/conveniado.service";


@Component({
  selector: "conveniado-list",
  templateUrl: "conveniado-list.component.html"
})
export class ConveniadoListComponent extends BaseResourceListComponent<Conveniado> { 

  constructor(private conveniadoService: ConveniadoService, private router: Router) { 
    super(conveniadoService);
  }

  edit(id: number) {
    this.router.navigate(['conveniados', id, 'edit']);
  }

}
