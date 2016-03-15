import {OnInit} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {QaDemoList} from "./qa-demo-list.component";
import {QaDemoDetail} from "./qa-demo-detail.component";
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {QaDemoContacts} from "../services/qa-demo-contacts.service";
import {QaValidators} from "../services/qa-validators.service";

@Component({
  selector: 'qa-demo',
  template: '<router-outlet></router-outlet>',
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, QaDemoContacts, QaValidators],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', name:'List', component: QaDemoList},
  {path: '/detail/:id', name: 'Detail', component: QaDemoDetail}
])
export class QaDemo{
}
