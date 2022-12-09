import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username: string = 'admin';
  password: any = 'testing';
  Authenticated: boolean = false;
  constructor() {}
}
