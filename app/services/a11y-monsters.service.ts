import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {IMonster} from "../models/monster.model";
import {Observable} from "rxjs/Observable";
import {ISighting} from "../models/sighting.model";

@Injectable()
export class A11yMonsters {

  private API_ENDPOINT = 'http://localhost:4000';

  constructor(private http:Http) {
  }

  getMonsters():Observable<IMonster[]> {
    return this.http.get(`${this.API_ENDPOINT}/monsters`)
    .map(res => res.json().monsters);
  }

  getSightings(): Observable<ISighting[]> {
    return this.http.get(`${this.API_ENDPOINT}/sightings`)
      .map(res => res.json().sightings);
  }

  getMaxSightings(): Observable<ISighting[]> {
    return this.http.get(`${this.API_ENDPOINT}/maxsightings`)
      .map(res => res.json().sightings);
  }

}
