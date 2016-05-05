import {ITeamAPILink, ITeamAPIObject, IPlayerAPIObject, APIHelpers} from './api';
import {Player} from './player';

export interface ITeamSimple {
  id: number;
  name: string;
}



export class Team {
  constructor(public id                :  number,
              public name              :  string,
              public shortName         :  string,
              public code              :  string,
              public squadMarketValue  :  string,
              public crestUrl          :  string,
              public players           : Player[] = []) {
  }

  static createFromObject (teamObj: ITeamAPIObject,
                           playersObjArr: IPlayerAPIObject[] = []) : Team {
    return new Team(
      APIHelpers.getIdFromUrl(teamObj._links.self.href),
      teamObj.name,
      teamObj.shortName,
      teamObj.code,
      teamObj.squadMarketValue,
      teamObj.crestUrl,
      playersObjArr.map(Player.createFromObject)
    );
  }
}
