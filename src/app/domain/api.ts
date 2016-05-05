export interface IPlayerAPIObject {
    name          : string;
    position      : string;
    jerseyNumber  : number;
    dateOfBirth   : string;
    nationality   : string;
    contractUntil : string;
    marketValue   : string;
};

export interface IAPILink {
  href: string;
};

export interface ITeamAPILink {
  self      : IAPILink;
  fixtures  : IAPILink;
  players   : IAPILink;
}

export interface ITeamAPIObject {
  _links           : ITeamAPILink;
  name             : string;
  code             : string;
  shortName        : string;
  squadMarketValue : string;
  crestUrl         : string;
}

export interface IFixtureAPILink {
    self: IAPILink;
    soccerseason: IAPILink;
    homeTeam: IAPILink;
    awayTeam: IAPILink;
}

export interface IResult {
  goalsHomeTeam: number;
  goalsAwayTeam: number;
}


export interface IFixtureSimpleAPIObject {
  _links: IFixtureAPILink;
  date: string;
  status: string;
  matchday: number;
  homeTeamName: string;
  awayTeamName: string;
  result: IResult;
}

export interface IHeadToHeadAPIObject {
  count                : number;
  timeFrameStart       : string;
  timeFrameEnd         : string;
  homeTeamWins         : number;
  awayTeamWins         : number;
  draws                : number;
  lastHomeWinHomeTeam  ?: IFixtureSimpleAPIObject;
  lastWinHomeTeam      ?: IFixtureSimpleAPIObject;
  lastAwayWinAwayTeam  ?: IFixtureSimpleAPIObject;
  lastWinAwayTeam      ?: IFixtureSimpleAPIObject;
  fixtures             : IFixtureSimpleAPIObject[]
}

export interface IFixtureCompleteAPIObject {
  fixture: IFixtureSimpleAPIObject;
  head2head: IHeadToHeadAPIObject;
}



export class APIHelpers {
  static getIdFromUrl (url: string) {
    return +url.slice(url.lastIndexOf('/') + 1);
  }
}
