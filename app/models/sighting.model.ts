export interface ISighting {
  id:number,
  name:string,
  sightings:number
}

export class Sighting implements ISighting {

  constructor();
  constructor(id:number, name:string, sightings:number);
  constructor(public id?:any, public name?:any, public sightings?:any) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
    this.sightings = sightings ? sightings : 0;
  }

}
