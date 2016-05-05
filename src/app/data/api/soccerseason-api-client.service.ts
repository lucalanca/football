import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SoccerseasonApiClientService {

  constructor(private http: Http) {}


  getLeagues () {
    console.log(this.http);
  }


}
