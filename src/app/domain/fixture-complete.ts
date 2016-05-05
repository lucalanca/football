import {IFixtureCompleteAPIObject} from './api';

import {FixtureSimple} from './fixture-simple';
import {HeadToHead}    from './head-to-head';

class FixtureComplete {
  constructor(public info: FixtureSimple,
              public headToHead: HeadToHead) {}

  static createFromObject (fixtureCompleteObj: IFixtureCompleteAPIObject) : FixtureComplete {
    return new FixtureComplete(
      FixtureSimple.createFromObject(fixtureCompleteObj.fixture),
      HeadToHead.createFromObject(fixtureCompleteObj.head2head)
    );
  }
}
