export interface IContact {
  id: number,
  firstname: string,
  lastname: string
}

export class Contact implements IContact {

  constructor();
  constructor(id:number, firstname:string, lastname:string);
  constructor(public id?:any, public firstname?:any, public lastname?:any) {
    this.id = id ? id : 0;
    this.firstname = firstname ? firstname : '';
    this.lastname = lastname ? lastname : '';
  }

}
