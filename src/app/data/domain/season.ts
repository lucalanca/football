import {
  IAPILink,
  ITeamAPIObject,
  APIHelpers,
  IFixtureSimpleAPIObject
} from '../api/api';
import {Team, ITeamSimple} from './team';
import {FixtureSimple}     from './fixture-simple';

// import {groupBy} from 'lodash';

export interface ISeasonAPILink {
  self: IAPILink;
  teams: IAPILink;
  fixtures: IAPILink;
  leagueTable: IAPILink;
}

export interface ISeasonAPIObject {
  _links: ISeasonAPILink;
  id: number;
  caption: string;
  league: string;
  year: string;
  currentMatchday: number;
  numberOfMatchdays: number;
  numberOfTeams: number;
  numberOfGames: number;
  lastUpdated: string;
}


export class Season {
  constructor(
      public id: number,
      public caption: string,
      public league: string,
      public year: string,
      public currentMatchday: number,
      public numberOfMatchdays: number,
      public numberOfTeams: number,
      public numberOfGames: number,
      public teams: Team[] = [],
      public fixtures: FixtureSimple[] = []) {}

  // static createFromObject(
  //     seasonObj: ISeasonAPIObject, teamsObjsArr: ITeamAPIObject[] = [],
  //     fixturesObjsArr: IFixtureSimpleAPIObject[] = []): Season {
  //   // console.log('creating season');
  //   var teams = teamsObjsArr.map((t) => Team.createFromObject(t));
  //   // console.log('teams', teams);
  //   var fixtures = fixturesObjsArr.map(FixtureSimple.createFromObject);
  //
  //   return new Season(
  //       seasonObj.id, seasonObj.caption, seasonObj.league, seasonObj.year,
  //       seasonObj.currentMatchday, seasonObj.numberOfMatchdays, seasonObj.numberOfTeams,
  //       seasonObj.numberOfGames, teams, fixtures);
  // }

  getMatchdayFixtures(matchday: number = 1) {
    if (matchday < 1 || matchday > this.numberOfMatchdays) {
      return [];
    }

    return this.fixtures.filter((f) => f.matchday === matchday);
  }

  getCurrentMatchday() { return this.getMatchdayFixtures(this.currentMatchday); }

  getFixturesGroupedByMatchday() {
    // return groupBy(this.fixtures, 'matchday');
  }
}
