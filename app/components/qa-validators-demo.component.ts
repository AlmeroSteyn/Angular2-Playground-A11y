import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {QaValidators} from "../services/qa-validators.service";
import {FormBuilder} from "angular2/common";
import {ControlGroup} from "angular2/common";
import {Validators} from "angular2/common";
import {QaLengthValidator} from "../directives/qa-length-validator.directive";

@Component({
  selector: 'qa-validators-demo',
  templateUrl: './app/components/qa-validators-demo.component.html',
  directives: [QaLengthValidator]
})
export class QaValidatorsDemo implements OnInit {

  constructor(private qaValidators:QaValidators, private formBuilder:FormBuilder) {
  }

  demoForm:ControlGroup;

  ngOnInit() {
    this.demoForm = this.formBuilder.group({
      'divNumber': ['',Validators.compose([ Validators.required, this.qaValidators.divisibleByTen])]
    });
  }
}
