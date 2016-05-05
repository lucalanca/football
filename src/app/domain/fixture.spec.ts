import {
  describe,
  expect,
  it
} from '@angular/core/testing';

import {Team} from './team';
import {FixtureSimple} from './fixture-simple';

import {FIXTURES_MOCK} from './mocks/api-fixtures';
import {TEAMS_MOCK}    from './mocks/api-teams';

const TEAM_MOCK    = TEAMS_MOCK[4];
const TEAM_MOCK_2  = TEAMS_MOCK[14];
const FIXTURE_MOCK = FIXTURES_MOCK[0];


describe('Fixture ', () => {
  it('constructs a fixture using the class constructor', () => {
    var tHome = new Team(503, 'FC Porto', 'Porto', 'FCP', '150,850,000 €', 'http://upload.wikimedia.org/wikipedia/de/e/ed/FC_Porto_1922-2005.svg');
    var tAway = new Team(504, 'SL Benfica', 'Benfica', 'SLB', '150,850,000 €', 'http://upload.wikimedia.org/wikipedia/de/e/ed/FC_Porto_1922-2005.svg');

    var f = new FixtureSimple(1, '2015-08-14T19:30:00Z', 'FINISHED', 1, 1, 2, tHome, tAway);
    expect(f.id).toBe(1);
    expect(f.date).toBe('2015-08-14T19:30:00Z'),
    expect(f.status).toBe('FINISHED');
    expect(f.matchday).toBe(1);
    expect(f.goalsHomeTeam).toBe(1);
    expect(f.goalsAwayTeam).toBe(2);
    expect(f.homeTeam.name).toBe('FC Porto');
    expect(f.awayTeam.name).toBe('SL Benfica');
  });

  it('constructs a fixture using the static method that receives an oject', () => {
    expect(FixtureSimple.createFromObject).toBeDefined();

    var f = FixtureSimple.createFromObject(FIXTURE_MOCK);
    expect(f.id).toBe(148569);
    expect(f.date).toBe('2015-08-14T19:30:00Z'),
    expect(f.status).toBe('FINISHED');
    expect(f.matchday).toBe(1);
    expect(f.goalsHomeTeam).toBe(1);
    expect(f.goalsAwayTeam).toBe(2);
    expect(f.homeTeam.name).toBe('CD Tondela');
    expect(f.awayTeam.name).toBe('Sporting CP');
  });
});
