import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Prestador extends BaseResourceModel {
  constructor(
    public nome?: string,
    public cnpj?: string,
    public cpf?: string,
    public razaoSocial?: string
  ){
    super();
  }


  static fromJson(jsonData: any): Prestador {
    console.log(Object.assign(new Prestador(), jsonData));

    return Object.assign(new Prestador(), jsonData);
  }
}