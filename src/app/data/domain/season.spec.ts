import {
  describe,
  expect,
  it
} from '@angular/core/testing';

import  {Season} from './season';
import  {Team}   from './team';

import {SEASON_MOCK}   from '../api/mocks/api-season';
import {TEAMS_MOCK}    from '../api/mocks/api-teams';
import {FIXTURES_MOCK} from '../api/mocks/api-fixtures';


describe('Season', () => {
  // it('constructs a season using the class constructor', () => {
  //   var teams = TEAMS_MOCK.map((t) => Team.createFromObject(t));
  //   var s = new Season(402, 'Primeira Liga 2015/16', 'PPL', '2015', 32, 34, 18, 306, teams);
  //
  //   expect(s.id).toBe(402);
  //   expect(s.caption).toBe('Primeira Liga 2015/16');
  //   expect(s.league).toBe('PPL');
  //   expect(s.year).toBe('2015');
  //   expect(s.currentMatchday).toBe(32);
  //   expect(s.numberOfMatchdays).toBe(34);
  //   expect(s.numberOfTeams).toBe(18);
  //   expect(s.numberOfGames).toBe(306);
  //
  //   expect(s.teams.length).toBe(18);
  //   expect(s.teams[4].name).toBe('FC Porto');
  // });

  // it('constructs a season using the static method that receives an oject', () => {
  //   expect(Season.createFromObject).toBeDefined();
  //
  //   var s = Season.createFromObject(SEASON_MOCK, TEAMS_MOCK, FIXTURES_MOCK);
  //
  //   expect(s.id).toBe(402);
  //   expect(s.caption).toBe('Primeira Liga 2015/16');
  //   expect(s.league).toBe('PPL');
  //   expect(s.year).toBe('2015');
  //   expect(s.currentMatchday).toBe(32);
  //   expect(s.numberOfMatchdays).toBe(34);
  //   expect(s.numberOfTeams).toBe(18);
  //   expect(s.numberOfGames).toBe(306);
  //
  //   expect(s.teams.length).toBe(18);
  //   expect(s.teams[4].name).toBe('FC Porto');
  // });

  // it('`getMatchdayFixtures` should return the second fixture', () => {
  //   var s = Season.createFromObject(SEASON_MOCK, TEAMS_MOCK, FIXTURES_MOCK);
  //
  //   var secondMatchday = s.getMatchdayFixtures(2);
  //   expect(secondMatchday.length).toBe(9);
  //   expect(secondMatchday[0].matchday).toBe(2);
  // });
  //
  // it('`getMatchdayFixtures` should return the first fixture when nothing is passed', () => {
  //   var s = Season.createFromObject(SEASON_MOCK, TEAMS_MOCK, FIXTURES_MOCK);
  //
  //   var firstMatchday = s.getMatchdayFixtures();
  //   expect(firstMatchday.length).toBe(9);
  //   expect(firstMatchday[0].matchday).toBe(1);
  // });
  //
  // it('`getMatchdayFixtures` should return empty when matchday is smaller than 1', () => {
  //   var s = Season.createFromObject(SEASON_MOCK, TEAMS_MOCK, FIXTURES_MOCK);
  //
  //   var emptyMatchdayFixtures = s.getMatchdayFixtures(0);
  //   expect(emptyMatchdayFixtures).toEqual([]);
  // });
  //
  // it('`getMatchdayFixtures` should return empty when matchday is bigger than the maximum maxday',
  //    () => {
  //      var s = Season.createFromObject(SEASON_MOCK, TEAMS_MOCK, FIXTURES_MOCK);
  //
  //      var emptyMatchdayFixtures = s.getMatchdayFixtures(35);
  //      expect(emptyMatchdayFixtures).toEqual([]);
  //    });
  //
  // it('`getCurrentMatchday` should just work as expected', () => {
  //   var s = Season.createFromObject(SEASON_MOCK, TEAMS_MOCK, FIXTURES_MOCK);
  //   var currentMatchday = s.getCurrentMatchday();
  //   expect(currentMatchday.length).toBe(9);
  //   expect(currentMatchday[0].matchday).toBe(s.currentMatchday);
  //
  // });
  //
  // it('`getFixturesGroupedByMatchday` should just work as expected', () => {
  //   var s = Season.createFromObject(SEASON_MOCK, TEAMS_MOCK, FIXTURES_MOCK);
  //
  //   var allMatchdays = s.getFixturesGroupedByMatchday();
  // });
});
