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
      email: ['', Validators.required]
    });
  }

  submitForm ({ value, valid }: { value: { name: string; email: string }, valid: boolean }) {
    console.log(value, valid);
    this.reset();
  }

  reset () {
    this.subscriber.reset({
      name: '',
      email: ''
    });
  }

}
