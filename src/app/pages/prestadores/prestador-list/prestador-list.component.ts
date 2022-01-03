import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BaseResourceListComponent } from "src/app/shared/components/base-resource-list/base-resource-list.component";
import { Prestador } from "../shared/prestador.model";
import { PrestadorService } from "../shared/prestador.service";

@Component({
  selector: "prestador-list",
  templateUrl: "prestador-list.component.html"
})
export class PrestadorListComponent extends BaseResourceListComponent<Prestador> { 

  constructor(private prestadorService: PrestadorService, private router: Router) { 
    super(prestadorService);
  }

  edit(id: number) {
    this.router.navigate(['prestadores', id, 'edit']);
  }
}
