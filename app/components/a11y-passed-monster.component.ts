import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {IMonster} from "../models/monster.model";

@Component({
  selector: 'a11y-passed-monster',
  templateUrl:'./app/components/a11y-passed-monster.component.html'
})
export class A11yPassedMonster{
  @Input() monster: IMonster;
}
