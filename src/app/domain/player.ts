import { IPlayerAPIObject } from './api';

export class Player {
  constructor(public name          : string,
              public position      : string,
              public jerseyNumber  : number,
              public dateOfBirth   : string,
              public nationality   : string,
              public contractUntil : string,
              public marketValue   : string) {
  }


  static createFromObject (obj: IPlayerAPIObject) : Player {
    return new Player(
      obj.name,
      obj.position,
      obj.jerseyNumber,
      obj.dateOfBirth,
      obj.nationality,
      obj.contractUntil,
      obj.marketValue
    );
  }
};
