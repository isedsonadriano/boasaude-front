import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Conveniado extends BaseResourceModel {
  
  constructor(
    public nome?: string,
    public cpf?: string
  ){
    super();
  }


  static fromJson(jsonData: any): Conveniado {
    console.log(Object.assign(new Conveniado(), jsonData));

    return Object.assign(new Conveniado(), jsonData);
  }
}