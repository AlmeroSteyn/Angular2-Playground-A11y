import {Component} from "angular2/core";
import {A11yPassedMonsters} from "./a11y-passed-monsters.component";

@Component({
  selector: 'a11y-passed',
  templateUrl: './app/components/a11y-passed.component.html',
  directives: [A11yPassedMonsters]
})
export class A11yPassed{

}
