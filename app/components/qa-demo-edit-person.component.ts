import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {Contact, IContact} from "../models/contact.model";
import {OnChanges} from "angular2/core";

@Component({
  selector: 'qa-demo-edit-person',
  templateUrl: './app/components/qa-demo-edit-person.component.html',
  directives: [FORM_DIRECTIVES]
})
export class QaDemoEditPerson implements OnChanges {

  @Input() person:IContact;
  @Output() onChange:EventEmitter<IContact> = new EventEmitter();

  internalItem:IContact = new Contact();

  ngOnChanges(changes:any):void {
    var personChange:IContact = changes.person.currentValue;
    if (personChange) {
      this.internalItem = new Contact(personChange.id, personChange.firstname, personChange.lastname);
    }
  }

  onSave():void {
    this.onChange.emit(this.internalItem);
  }

}
