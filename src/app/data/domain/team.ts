import {
  ITeamAPILink,
  ITeamAPIObject,
  IPlayerAPIObject,
  APIHelpers
} from '../api/api';
import {Player} from './player';

export interface ITeamSimple {
  id: number;
  name: string;
}



export class Team {
  constructor(
      public id: number,
      public name: string,
      public shortName: string,
      public code: string,
      public squadMarketValue: string,
      public crestUrl: string,
      public players: Player[] = []
  ) {}
}
