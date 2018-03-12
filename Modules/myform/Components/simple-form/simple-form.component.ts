import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { PasswordValidation } from '@app/Modules/passwordMatch.class'
import { Activity } from './activity.interface';

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
  channels: any[] = [
    {
      name: 'tvN',
      description: 'Total Variety Network',
      order: 1
    },
    {
      name: 'BBC',
      description: 'British Broadcasting Corporation',
      order: 2
    }
  ];
  activities: Array<Activity> = [
    {
      name: 'descr1',
      value: 'value1',
      id: 1
    },
    {
      name: 'descr2',
      value: 'value2',
      id: 2
    },
    {
      name: 'descr3',
      value: 'value3',
      id: 3
    }
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit () {
    this.subscriber = this._formBuilder.group({
      name: ['名字', Validators.required],
      password: [
        'password',
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(5),
            Validators.pattern('^[a-zA-Z]+$')
          ])
      ],
      password_verify: [
        'password',
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(5),
            Validators.pattern('^[a-zA-Z]+$')
          ])
      ],
      email: ['mabow@gmail.com', Validators.compose([Validators.required, Validators.email])],
      channelControl: ['', [Validators.required]],
      activityControl: new FormArray([]),
      activityControl_dub: new FormArray([])
    }, {
      validator: PasswordValidation.MatchPassword
    });
    // this.onChanges();

  }

  initActivityControl () {
    return this.activities.map((item: Activity) => this._formBuilder.group(item));
  }

  getPasswordErrorMessage (target) {
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

  getEmailErrorMessage (target) {
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


  onCheckChange (event) {
    let activityControlArray: FormArray = this.subscriber.get('activityControl') as FormArray;
    if (event.target.checked) {
      // Add a new control in the arrayForm
      activityControlArray.push(new FormControl(event.target.value));
    } else {
      // find the unselected element
      activityControlArray.controls = activityControlArray.controls.filter((ctrl: FormControl) => {
        return ctrl.value !== event.target.value;
      });
    }
  }

  onCheckChange_dub (isChecked, value) {
    let activityControlArray_dub: FormArray = this.subscriber.get('activityControl_dub') as FormArray;
    isChecked ?
    activityControlArray_dub.push(new FormControl(value))
    : activityControlArray_dub.controls = activityControlArray_dub.controls.filter((ctrl: FormControl) => {
      return ctrl.value !== value;
    });
  }

  onChanges () {
    this.subscriber.valueChanges.subscribe(form => {
      let formattedMsg =
      `
        Hello,
        My name is ${form.name} and my email is ${form.email}.
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
