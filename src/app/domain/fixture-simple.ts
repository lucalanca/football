import {IResult, ITeamAPIObject, IFixtureAPILink, IFixtureSimpleAPIObject, APIHelpers} from './api';
import {ITeamSimple} from './team';


export class FixtureSimple {
  constructor(public id: number,
              public date: string,
              public status: string,
              public matchday: number,
              public goalsHomeTeam: number,
              public goalsAwayTeam: number,
              public homeTeam: ITeamSimple,
              public awayTeam: ITeamSimple) {
  }

  static createFromObject (fixtureObj: IFixtureSimpleAPIObject) : FixtureSimple {
    const homeTeam : ITeamSimple = {
      id: APIHelpers.getIdFromUrl(fixtureObj._links.homeTeam.href),
      name: fixtureObj.homeTeamName
    };

    const awayTeam : ITeamSimple = {
      id: APIHelpers.getIdFromUrl(fixtureObj._links.awayTeam.href),
      name: fixtureObj.awayTeamName
    };

    return new FixtureSimple(
      APIHelpers.getIdFromUrl(fixtureObj._links.self.href),
      fixtureObj.date,
      fixtureObj.status,
      fixtureObj.matchday,
      fixtureObj.result.goalsHomeTeam,
      fixtureObj.result.goalsAwayTeam,
      homeTeam,
      awayTeam
    );
  }
}
