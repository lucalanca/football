import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SoccerseasonApiClientService } from './soccerseason-api-client.service';

describe('SoccerseasonApiClient Service', () => {
  beforeEachProviders(() => [SoccerseasonApiClientService]);

  describe('`getLeagues`', () => {
    // it('should be defined',
    //     inject([SoccerseasonApiClientService], (service: SoccerseasonApiClientService) => {
    //   expect(service.getLeagues).toBeDefined();
    // }));
    //
    // it('should return an array of `Season`',
    //     inject([SoccerseasonApiClientService], (service: SoccerseasonApiClientService) => {
    //   service.getLeagues()
    //   expect().toBeDefined();
    // }));
  });

});
