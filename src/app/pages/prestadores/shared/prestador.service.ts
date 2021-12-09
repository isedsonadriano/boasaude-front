import { Injectable, Injector } from '@angular/core';
import { Prestador } from "./prestador.model";

import { BaseResourceService } from "../../../shared/services/base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class PrestadorService extends BaseResourceService<Prestador> {

  constructor(protected injector: Injector) {
    super("http://localhost:8083/v1/prestadores", injector, Prestador.fromJson);
  }

}