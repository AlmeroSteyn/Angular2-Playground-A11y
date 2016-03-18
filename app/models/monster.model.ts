export interface IMonster {
  id: number;
  name: string;
  imageUrl: string;
  imageText: string;
  desc: string;
}

export class Monster implements IMonster {

  constructor();
  constructor(id:number, name:string, imageUrl:string, imageText:string, desc: string);
  constructor(public id?:any, public name?:any, public imageUrl?:any, public imageText?:any, public desc?:any) {
    this.id = id ? 0 : id;
    this.name = name ? name : '';
    this.imageUrl = imageUrl ? imageUrl : '';
    this.imageText = imageText ? imageText : '';
    this.desc = desc ? desc : '';
  }

}
