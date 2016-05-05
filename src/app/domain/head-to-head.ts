import {IHeadToHeadAPIObject} from './api';
import {FixtureSimple} from './fixture-simple';


export class HeadToHead {
  constructor(public count: number,
              public timeFrameStart: string,
              public timeFrameEnd: string,
              public homeTeamWins: number,
              public awayTeamWins: number,
              public draws: number,
              public lastHomeWinHomeTeam ?: FixtureSimple,
              public lastWinHomeTeam     ?: FixtureSimple,
              public lastAwayWinAwayTeam ?: FixtureSimple,
              public lastWinAwayTeam     ?: FixtureSimple,
              public fixtures             : FixtureSimple[] = []) {
  }

  static createFromObject (headToHeadObject: IHeadToHeadAPIObject) : HeadToHead {
    return new HeadToHead(
      headToHeadObject.count,
      headToHeadObject.timeFrameStart,
      headToHeadObject.timeFrameEnd,
      headToHeadObject.homeTeamWins,
      headToHeadObject.awayTeamWins,
      headToHeadObject.draws,
      headToHeadObject.lastHomeWinHomeTeam ? FixtureSimple.createFromObject(headToHeadObject.lastHomeWinHomeTeam) : undefined,
      headToHeadObject.lastWinHomeTeam ? FixtureSimple.createFromObject(headToHeadObject.lastWinHomeTeam) : undefined,
      headToHeadObject.lastAwayWinAwayTeam ? FixtureSimple.createFromObject(headToHeadObject.lastAwayWinAwayTeam) : undefined,
      headToHeadObject.lastWinAwayTeam ? FixtureSimple.createFromObject(headToHeadObject.lastWinAwayTeam) : undefined,
      headToHeadObject.fixtures.map(FixtureSimple.createFromObject)
    );
  }
}
