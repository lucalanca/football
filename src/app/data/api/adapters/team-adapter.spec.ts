import {
  describe,
  expect,
  it
} from '@angular/core/testing';

import {Team} from '../../domain/team';
import {PLAYERS_MOCK} from '../mocks/api-players';
import {TEAMS_MOCK} from '../mocks/api-teams';
import {teamAdapter} from './team-adapter';

const PORTO_TEAM_MOCK = TEAMS_MOCK[4];

describe('`teamAdapter`', () => {
  it('transforms a team api object into a team instance', () => {
    const team = teamAdapter(PORTO_TEAM_MOCK, PLAYERS_MOCK);

    expect(team.id).toBe(503);
    expect(team.name).toBe('FC Porto');
    expect(team.shortName).toBe('Porto');
    expect(team.code).toBe('FCP');
    expect(team.squadMarketValue).toBe('150,850,000 €');
    expect(team.crestUrl).toBe('http://upload.wikimedia.org/wikipedia/de/e/ed/FC_Porto_1922-2005.svg');
    expect(team.players.length).toBe(25);
  });
});
