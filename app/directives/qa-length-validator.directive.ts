import {Directive} from "angular2/core";
import {Control} from "angular2/common";
import {QaValidators} from "../services/qa-validators.service";
import {NG_VALIDATORS} from "angular2/common";
import {provide} from "angular2/core";
import {forwardRef} from "angular2/core";

@Directive({
  selector: '[qaLengthValidator]',
  providers: [provide(NG_VALIDATORS,{
    useExisting:forwardRef(() => QaLengthValidator),
    multi: true
  })]
})
export class QaLengthValidator{

  constructor(private validators: QaValidators){}

  validate(control: Control){
    return this.validators.longerThanSeven(control);
  }
}
