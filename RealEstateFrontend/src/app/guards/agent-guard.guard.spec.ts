import { TestBed } from '@angular/core/testing';

import { AgentGuardGuard } from './agent-guard.guard';

describe('AgentGuardGuard', () => {
  let guard: AgentGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AgentGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
