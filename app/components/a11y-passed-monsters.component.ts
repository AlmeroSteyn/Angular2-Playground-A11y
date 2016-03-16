import {OnInit} from "angular2/core";
import {Component} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/common";
import {A11yPassedMonster} from "./a11y-passed-monster.component";
import {Observable} from "rxjs/Observable";
import {IMonster} from "../models/monster.model";
import {A11yMonsters} from "../services/a11y-monsters.service";

@Component({
  selector: 'a11y-passed-monsters',
  templateUrl: './app/components/a11y-passed-monsters.component.html',
  directives: [CORE_DIRECTIVES, A11yPassedMonster]
})
export class A11yPassedMonsters implements OnInit{

  monsters: Observable<IMonster[]>;

  constructor(private monstersService: A11yMonsters){}

  ngOnInit():void{
    this.monsters = this.monstersService.getMonsters();
  }

}
