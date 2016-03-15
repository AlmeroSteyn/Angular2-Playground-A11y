import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {IContact} from "../models/contact.model";
import {Observable} from "rxjs/Observable";
import {Headers} from "angular2/http";

@Injectable()
export class QaDemoContacts {

  private API_ENDPOINT = 'http://localhost:4000';

  constructor(private http:Http) {
  }

  getContacts():Observable<IContact[]> {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
      .map(res => res.json().items);
  }

  getContact(id:string):Observable<IContact> {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
      .map(res => res.json().item);
  }

  putContact(contact:IContact):Observable<IContact> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.API_ENDPOINT}/contacts/${contact.id}`, JSON.stringify(contact), {headers: headers})
      .map(res => res.json().item);
  }

  postContact(contact:IContact):Observable<IContact> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.API_ENDPOINT}/contacts`, JSON.stringify(contact), {headers: headers})
      .map(res => res.json().item)
  }

}
