import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private credentials: AuthService) {}

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, this.noSpaceAllowed]),
    password: new FormControl('', [
      Validators.minLength(5),
      Validators.required,
      this.noSpaceAllowed,
    ]),
  });

  ngOnInit(): void {}

  userLogin() {
    if (
      this.loginForm.value.name === this.credentials.username &&
      this.loginForm.value.password === this.credentials.password
    ) {
      this.router.navigateByUrl('home');
      this.credentials.Authenticated = true;
    } else {
      alert('Login failed... Please enter valid credentials');
    }
  }

  get name() {
    return this.loginForm.get('name');
  }
  get password() {
    return this.loginForm.get('password');
  }

  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }
}
