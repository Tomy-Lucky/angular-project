import { TestBed } from '@angular/core/testing';

import { AddNoteFormDeactivateGuard } from './add-note-form-deactivate.guard';

describe('AddNoteFormDeactivateGuard', () => {
  let guard: AddNoteFormDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddNoteFormDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
