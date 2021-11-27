import { Component, OnInit } from '@angular/core';
import { Contact } from '../api/contact/contact.interface';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contactModel: Contact = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  constructor() {}
  ngOnInit(): void {}

  onSubmit(value: any) {
    console.log(value);
  }
}
