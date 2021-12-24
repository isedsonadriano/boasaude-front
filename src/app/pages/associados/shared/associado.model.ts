import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Associado extends BaseResourceModel {
  
  constructor(
    public nome?: string,
    public cpf?: string,
    public numeroCarteira?: string,
    public tipoPlano?: string,
    public telefone?: string,
    public status?: string,
    public dataNascimento?: string,
    public nomeDaMae?: string,
    public rg?: string,
    public titular?: boolean,
    

  ){
    super();
  }


  static fromJson(jsonData: any): Associado {
    console.log(Object.assign(new Associado(), jsonData));

    return Object.assign(new Associado(), jsonData);
  }
}