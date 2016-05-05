import {
  describe,
  expect,
  it
} from '@angular/core/testing';

import {Player} from '../../domain/player';
import {PLAYERS_MOCK} from '../mocks/api-players';
import {playerAdapter} from './player-adapter';

describe('`playerAdapter`', () => {
  it('transforms a player api object into a player instance', () => {
    const player = playerAdapter(PLAYERS_MOCK[1]);

    expect(player.name).toBe('Silvestre Varela');
    expect(player.position).toBe('Left Wing');
    expect(player.jerseyNumber).toBe(7);
    expect(player.dateOfBirth).toBe('1985-02-02');
    expect(player.nationality).toBe('Portugal');
    expect(player.contractUntil).toBe('2019-06-30');
    expect(player.marketValue).toBe('4,500,000 €');
  });
});
