import { TestBed, inject } from '@angular/core/testing';

import { SerPostsService } from './ser-posts.service';

describe('SerPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerPostsService]
    });
  });

  it('should be created', inject([SerPostsService], (service: SerPostsService) => {
    expect(service).toBeTruthy();
  }));
});
