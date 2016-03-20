import {Component} from "angular2/core";
import {A11yPassedMonsters} from "./a11y-passed-monsters.component";
import {A11yMonsters} from "../services/a11y-monsters.service";
import {OnInit} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {ISighting} from "../models/sighting.model";

@Component({
  selector: 'a11y-passed',
  templateUrl: './app/components/a11y-passed.component.html',
  directives: [A11yPassedMonsters]
})
export class A11yPassed implements OnInit{

  sightings: Observable<ISighting[]>;

  constructor(private monsters: A11yMonsters){}

  ngOnInit(){
     this.sightings = this.monsters.getMaxSightings();
  }

}
