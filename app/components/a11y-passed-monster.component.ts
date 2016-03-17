import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {IMonster} from "../models/monster.model";
import {Monster} from "../models/monster.model";
import {OnChanges} from "angular2/core";

@Component({
  selector: 'a11y-passed-monster',
  templateUrl:'./app/components/a11y-passed-monster.component.html'
})
export class A11yPassedMonster implements OnChanges{
  @Input() monster: IMonster;

  internalMonster: IMonster = new Monster();

  ngOnChanges(changes:any):void {
    var monsterChange:IMonster = changes.monster.currentValue;
    if (monsterChange) {
      this.internalMonster = new Monster(monsterChange.id, monsterChange.name, monsterChange.imageUrl,monsterChange.imageText);
    }
  }

}
