import { TestBed } from '@angular/core/testing';

import { MyJsonService } from './my-json.service';

describe('MyJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyJsonService = TestBed.get(MyJsonService);
    expect(service).toBeTruthy();
  });
});
