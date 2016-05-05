import {
  describe,
  expect,
  it
} from '@angular/core/testing';

import {Player} from './player';

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

describe('Player ', () => {
  it('constructs a player using the class constructor', () => {
    var p = new Player('Maicon', 'Center Back', 4, '1988-09-14', 'Brazil', '2017-06-30', '10,000,000 €');

    expect(p.name).toBe('Maicon');
    expect(p.position).toBe('Center Back');
    expect(p.jerseyNumber).toBe(4);
    expect(p.dateOfBirth).toBe('1988-09-14');
    expect(p.nationality).toBe('Brazil');
    expect(p.contractUntil).toBe('2017-06-30');
    expect(p.marketValue).toBe('10,000,000 €');
  });

  it('constructs a player using the static method that receives an oject', () => {
    expect(Player.createFromObject).toBeDefined();
    var players : Player[] = PLAYERS_MOCK.map((obj) => {
      return Player.createFromObject(obj);
    });

    expect(players.length).toBe(2);

    expect(players[1].name).toBe('Silvestre Varela');
    expect(players[1].position).toBe('Left Wing');
    expect(players[1].jerseyNumber).toBe(7);
    expect(players[1].dateOfBirth).toBe('1985-02-02');
    expect(players[1].nationality).toBe('Portugal');
    expect(players[1].contractUntil).toBe('2019-06-30');
    expect(players[1].marketValue).toBe('4,500,000 €');
  });
});
