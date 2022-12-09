import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    maidenName: new FormControl('', [Validators.required]),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern('^(0|[1-9][0-9]?|100)$'),
    ]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    username: new FormControl('', [Validators.required]),
    empId: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    bloodGroup: new FormControl('', [Validators.required]),
    height: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required]),
    eyeColor: new FormControl('', [Validators.required]),
    hair: new FormGroup({
      color: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    }),
    address: new FormGroup({
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{6}'),
      ]),
      state: new FormControl('', [Validators.required]),
      coordinates: new FormGroup({
        lat: new FormControl('', [Validators.required]),
        lng: new FormControl('', [Validators.required]),
      }),
    }),
    bank: new FormGroup({
      cardExpire: new FormControl('', [
        Validators.required,
        Validators.pattern('(0[1-9]|1[0-2])/([0-9]{2}$)'),
      ]),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{16}'),
      ]),
      cardType: new FormControl('', [Validators.required]),
      currency: new FormControl('', [Validators.required]),
      accountNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{11}'),
      ]),
    }),
    company: new FormGroup({
      department: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    }),
  });
  url = 'http://localhost:3000/employees';
  registered: boolean = false;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  registerEmp() {
    this.http.post(this.url, this.registrationForm.value).subscribe();
    this.registered = true;
    setTimeout(() => {
      this.registered = false;
    }, 1500);
    this.registrationForm.reset();
  }
}
