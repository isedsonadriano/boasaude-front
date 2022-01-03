import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Conveniado extends BaseResourceModel {
  
  constructor(
    public id?: number,
    public nome?: string,
    public cnpj?: string
  ){
    super();
  }


  static fromJson(jsonData: any): Conveniado {
    console.log(Object.assign(new Conveniado(), jsonData));

    return Object.assign(new Conveniado(), jsonData);
  }
}