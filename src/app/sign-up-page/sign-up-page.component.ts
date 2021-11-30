import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { MustMatch } from '../api/sign-up/sign-up-validation.service';
import { SignUp } from '../api/sign-up/sign-up.interface';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  userRegistrationForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userRegistrationForm = this.fb.group(
      {
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.userRegistrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.userRegistrationForm.invalid) {
      console.log('Here');
      return;
    }

    alert(
      'SUCCESS!! :-)\n\n' +
        JSON.stringify(this.userRegistrationForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.userRegistrationForm.reset();
  }
}
