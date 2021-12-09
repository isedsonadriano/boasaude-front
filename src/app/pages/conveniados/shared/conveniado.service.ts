import { Injectable, Injector } from '@angular/core';
import { Conveniado } from "./conveniado.model";

import { BaseResourceService } from "../../../shared/services/base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class ConveniadoService extends BaseResourceService<Conveniado> {

  constructor(protected injector: Injector) {
    super("http://localhost:8082/v1/conveniados", injector, Conveniado.fromJson);
  }

}