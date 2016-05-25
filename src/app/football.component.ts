import { Component } from '@angular/core';
import { LeagueComponent } from './league';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'football-app',
  templateUrl: 'football.component.html',
  styleUrls: ['football.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/league', component: LeagueComponent}
])
export class FootballAppComponent {
  title = 'football works!';
}
