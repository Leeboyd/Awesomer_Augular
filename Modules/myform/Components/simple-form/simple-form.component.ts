import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  subscriber: FormGroup;

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
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  getPasswordErrorMessage(target) {
    try {
      if (target.hasError('required')) {
        throw new Error('You must enter a value');
      }
      if (target.hasError('minlength')) {
        throw new Error('min 5 Chars');
      }
      if (target.hasError('pattern')) {
        throw new Error('Password must only be UpperCase, LowerCase and no Number.');
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

  submitForm ({ value, valid }: { value: { name: string; password: string }, valid: boolean }) {
    console.log(value, valid);
    this.reset();
  }

  reset () {
    this.subscriber.reset({
      name: '',
      password: '',
      email: ''
    });
  }

}
