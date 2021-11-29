import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  ngOnInit(): void {}

  userRegistrationForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormGroup({
      firstPassword: new FormControl(''),
      confirmPassword: new FormControl(''),
    }),
  });

  onSubmit() {
    console.log(this.userRegistrationForm.value);
  }
}
