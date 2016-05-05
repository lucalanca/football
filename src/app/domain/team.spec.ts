import {
  describe,
  expect,
  it
} from '@angular/core/testing';

import {Team} from './team';
import {Player} from './player';

import {TEAMS_MOCK} from './mocks/api-teams';

const TEAM_MOCK = TEAMS_MOCK[4];

const PLAYERS_MOCK = [
  {
    name: 'Maicon',
    position: 'Centre Back',
    jerseyNumber: 4,
    dateOfBirth: '1988-09-14',
    nationality: 'Brazil',
    contractUntil: '2017-06-30',
    marketValue: '10,000,000 €'
  }, {
    name: 'Silvestre Varela',
    position: 'Left Wing',
    jerseyNumber: 7,
    dateOfBirth: '1985-02-02',
    nationality: 'Portugal',
    contractUntil: '2019-06-30',
    marketValue: '4,500,000 €'
  }
];




describe('Team ', () => {
  it('constructs a team using the class constructor (without players)', () => {
    var t = new Team(503, 'FC Porto', 'Porto', 'FCP', '150,850,000 €', 'http://upload.wikimedia.org/wikipedia/de/e/ed/FC_Porto_1922-2005.svg');

    expect(t.id).toBe(503);
    expect(t.name).toBe('FC Porto');
    expect(t.shortName).toBe('Porto');
    expect(t.code).toBe('FCP');
    expect(t.squadMarketValue).toBe('150,850,000 €');
    expect(t.crestUrl).toBe('http://upload.wikimedia.org/wikipedia/de/e/ed/FC_Porto_1922-2005.svg');
    expect(t.players).toEqual([]);
  });

  it('constructs a team using the class constructor (with players', () => {
    const PLAYERS_MOCK = [
      {
        name: 'Maicon',
        position: 'Centre Back',
        jerseyNumber: 4,
        dateOfBirth: '1988-09-14',
        nationality: 'Brazil',
        contractUntil: '2017-06-30',
        marketValue: '10,000,000 €'
      }, {
        name: 'Silvestre Varela',
        position: 'Left Wing',
        jerseyNumber: 7,
        dateOfBirth: '1985-02-02',
        nationality: 'Portugal',
        contractUntil: '2019-06-30',
        marketValue: '4,500,000 €'
      }
    ];
    var players : Player[] = PLAYERS_MOCK.map((obj) => {
      return Player.createFromObject(obj);
    });

    var t = new Team(503, 'FC Porto', 'Porto', 'FCP', '150,850,000 €', 'http://upload.wikimedia.org/wikipedia/de/e/ed/FC_Porto_1922-2005.svg', players);

    expect(t.id).toBe(503);
    expect(t.name).toBe('FC Porto');
    expect(t.shortName).toBe('Porto');
    expect(t.code).toBe('FCP');
    expect(t.squadMarketValue).toBe('150,850,000 €');
    expect(t.crestUrl).toBe('http://upload.wikimedia.org/wikipedia/de/e/ed/FC_Porto_1922-2005.svg');
    expect(t.players.length).toBe(2);
  })

  it('constructs a team using the static method that receives an oject', () => {
    expect(Team.createFromObject).toBeDefined();

    var t1 = Team.createFromObject(TEAM_MOCK);
    expect(t1.id).toBe(503);
    expect(t1.name).toBe('FC Porto');
    expect(t1.shortName).toBe('Porto');
    expect(t1.code).toBe('FCP');
    expect(t1.squadMarketValue).toBe('150,850,000 €');
    expect(t1.crestUrl).toBe('http://upload.wikimedia.org/wikipedia/de/e/ed/FC_Porto_1922-2005.svg');
    expect(t1.players).toEqual([]);

    var t2 = Team.createFromObject(TEAM_MOCK, PLAYERS_MOCK);
    expect(t2.id).toBe(503);
    expect(t2.name).toBe('FC Porto');
    expect(t2.shortName).toBe('Porto');
    expect(t2.code).toBe('FCP');
    expect(t2.squadMarketValue).toBe('150,850,000 €');
    expect(t2.crestUrl).toBe('http://upload.wikimedia.org/wikipedia/de/e/ed/FC_Porto_1922-2005.svg');
    expect(t2.players.length).toBe(2);
  });
});
