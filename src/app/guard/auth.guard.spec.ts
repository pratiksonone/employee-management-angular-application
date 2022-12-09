import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let state: Observable<true> | Promise<true> | true;
  const createMockRoute = (id: any) => {
    return {
      params: { id: id },
    } as any;
  };
  const createMockRouteState = () => null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should call canActivate method', () => {
    expect(guard.canActivate()).toBe(false);
  });
});
