import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Associado extends BaseResourceModel {
  
  constructor(
    public nome?: string,
    public cpf?: string,
    public tipoPlano?: string,
    public numeroCarteira?: string

  ){
    super();
  }


  static fromJson(jsonData: any): Associado {
    console.log(Object.assign(new Associado(), jsonData));

    return Object.assign(new Associado(), jsonData);
  }
}