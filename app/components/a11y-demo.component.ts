import {Component} from "angular2/core";
import {ROUTER_PROVIDERS} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {A11yFailed} from "./a11y-failed.component";
import {A11yPassed} from "./a11y-passed.component";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
  selector: 'a11y-demo',
  template: '<router-outlet></router-outlet>',
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/failed', component: A11yFailed, name: 'A11yFailed'},
  {path:'/passed', component: A11yPassed, name: 'A11yPassed'}
])
export class A11yDemo {

}
