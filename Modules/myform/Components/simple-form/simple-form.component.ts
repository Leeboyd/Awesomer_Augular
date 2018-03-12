import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { PasswordValidation } from '@app/Modules/passwordMatch.class'

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  subscriber: FormGroup;
  customErrorStateMatcher = new CustomErrorStateMatcher();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit () {
    this.subscriber = this._formBuilder.group({
      name: ['', Validators.required],
      password: [
        '',
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(5),
            Validators.pattern('^[a-zA-Z]+$')
          ])
      ],
      password_verify: [
        '',
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(5),
            Validators.pattern('^[a-zA-Z]+$')
          ])
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    }, {
      validator: PasswordValidation.MatchPassword
    });
    // this.onChanges();
  }

  getPasswordErrorMessage(target) {
    try {
      if (target.hasError('required')) {
        throw new Error('You must enter a value');
      }
      if (target.hasError('pattern')) {
        throw new Error('Password must only be UpperCase, LowerCase and no Number.');
      }
      if (target.hasError('minlength')) {
        throw new Error('min 5 Chars');
      }
      if (target.hasError('MatchPassword')) {
        throw new Error('Password not Match');
      }
    } catch (error) {
      return error.message;
    }
  }

  getEmailErrorMessage(target) {
    try {
      if (target.hasError('required')) {
        throw new Error('You must enter a value');
      }
      if (target.hasError('email')) {
        throw new Error('Not a valid email.');
      }
    } catch (error) {
      return error.message;
    }
  }

  onChanges () {
    this.subscriber.valueChanges.subscribe(value => {
      let formattedMsg =
      `
        Hello,
        My name is ${value.name} and my email is ${value.email}.
      `;
      console.log(formattedMsg)
    });
  }

  submitForm ({ value, valid }: { value: { name: string; password: string }, valid: boolean }) {
    console.log(value, valid);
    this.resetForm();
  }

  resetForm () {
    this.subscriber.reset({
      name: '',
      password: '',
      password_verify: '',
      email: ''
    });
  }

}
