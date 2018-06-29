import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SharedEffects } from './shared.effects';

describe('SharedService', () => {
  let actions$: Observable<any>;
  let effects: SharedEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SharedEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(SharedEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
