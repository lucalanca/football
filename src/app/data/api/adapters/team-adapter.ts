import {Team} from '../../domain/team';
import {playerAdapter} from './player-adapter';
import {
  IPlayerAPIObject,
  ITeamAPIObject,
  APIHelpers
} from '../api';

export function teamAdapter(obj: ITeamAPIObject, playersObjArr: IPlayerAPIObject[]) : Team {
  return new Team(
      APIHelpers.getIdFromUrl(obj._links.self.href),
      obj.name,
      obj.shortName,
      obj.code,
      obj.squadMarketValue,
      obj.crestUrl,
      playersObjArr.map(playerAdapter));
};
