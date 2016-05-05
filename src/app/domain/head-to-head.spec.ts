import {
  describe,
  expect,
  it
} from '@angular/core/testing';

import {HeadToHead} from './head-to-head';
import {FIXTURE_MOCK} from './mocks/api-fixture';


describe('HeadToHead', () => {
  it('constructs a head to head using the static method that receives an oject', () => {
    expect(HeadToHead.createFromObject).toBeDefined();
    var head2head = HeadToHead.createFromObject(FIXTURE_MOCK.head2head);
    console.log('head2head', head2head);
  });
});
