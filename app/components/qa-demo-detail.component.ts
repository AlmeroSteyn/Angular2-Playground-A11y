import {OnInit} from "angular2/core";
import {Component} from "angular2/core";
import {IContact} from "../models/contact.model";
import {QaDemoContacts} from "../services/qa-demo-contacts.service";
import {RouteParams} from "angular2/router";
import {QaDemoEditPerson} from "./qa-demo-edit-person.component";
import {CORE_DIRECTIVES} from "angular2/common";
import {Router} from "angular2/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'qa-demo-detail',
  templateUrl: './app/components/qa-demo-detail.component.html',
  directives:[QaDemoEditPerson, CORE_DIRECTIVES]
})
export class QaDemoDetail implements OnInit{

  itemEntry: Observable<IContact>;

  constructor(private contacts: QaDemoContacts, private params: RouteParams, private router: Router ){}

  save(arg: IContact){
    this.contacts.putContact(arg)
    .subscribe(
      () => this.router.navigate(['List'])
    );
  }

  ngOnInit():void {
    this.itemEntry = this.contacts.getContact(this.params.get('id'));
  }

}
