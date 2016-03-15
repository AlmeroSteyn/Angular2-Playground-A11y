import {Component} from "angular2/core";
import {A11yMonsters} from "../services/a11y-monsters.service";
import {OnInit} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {IMonster} from "../models/monster.model";
import {CORE_DIRECTIVES} from "angular2/common";

@Component({
  selector: 'a11y-passed',
  templateUrl: './app/components/a11y-passed.component.html',
  directives: [CORE_DIRECTIVES]
})
export class A11yPassed implements OnInit{

  monsters: Observable<IMonster[]>;

  constructor(private monsterService: A11yMonsters){}

  ngOnInit():void{
    this.monsters = this.monsterService.getMonsters();
  }

}
