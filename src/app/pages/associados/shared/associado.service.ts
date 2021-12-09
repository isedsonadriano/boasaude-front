import { Injectable, Injector } from '@angular/core';
import { Associado } from "./associado.model";

import { BaseResourceService } from "../../../shared/services/base-resource.service";
import { Conveniado } from '../../conveniados/shared/conveniado.model';

@Injectable({
  providedIn: 'root'
})
export class AssociadoService extends BaseResourceService<Associado> {

  constructor(protected injector: Injector) {
    super("http://localhost:8081/v1/associados", injector, Conveniado.fromJson);
  }

}