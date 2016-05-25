import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FootballAppComponent } from '../app/football.component';

beforeEachProviders(() => [FootballAppComponent]);

describe('App: Football', () => {
  it('should create the app',
      inject([FootballAppComponent], (app: FootballAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'football works!\'',
      inject([FootballAppComponent], (app: FootballAppComponent) => {
    expect(app.title).toEqual('football works!');
  }));
});
