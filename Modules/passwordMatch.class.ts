import { AbstractControl } from '@angular/forms';

export class PasswordValidation {
  static MatchPassword (AC: AbstractControl) {
    let password = AC.get('password').value;
    let password_verify = AC.get('password_verify').value;
    if (password !== password_verify) {
      AC.get('password_verify').setErrors( { MatchPassword: true });
    } else {
      return null;
    }
  }
}