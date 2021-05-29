import { TestBed } from '@angular/core/testing';

import { GithubFacadeService } from './github-facade.service';

describe('GithubFacadeService', () => {
  let service: GithubFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
