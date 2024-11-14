import { Component } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function ZipCodeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const postalCodePattern = /^[0-9]{2}-[0-9]{3}$/;
    const isValid = postalCodePattern.test(control.value);
    return isValid ? null : { postalCodeInvalid: true };
  };
}
