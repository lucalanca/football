import {
  describe,
  expect,
  it
} from '@angular/core/testing';

import {Player} from './player';

describe('Player ', () => {
  it('constructs a player using the class constructor', () => {
    var p = new Player(
        'Maicon',
        'Center Back',
        4,
        '1988-09-14',
        'Brazil',
        '2017-06-30',
        '10,000,000 €'
    );

    expect(p.name).toBe('Maicon');
    expect(p.position).toBe('Center Back');
    expect(p.jerseyNumber).toBe(4);
    expect(p.dateOfBirth).toBe('1988-09-14');
    expect(p.nationality).toBe('Brazil');
    expect(p.contractUntil).toBe('2017-06-30');
    expect(p.marketValue).toBe('10,000,000 €');
  });
});
