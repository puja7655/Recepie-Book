import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  genders = ['male', 'female']
  signUpForm: FormGroup
  forbiddenUserNames = ['chris', 'ana']
  constructor() { }
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signUpForm.statusChanges.subscribe((value) => {
      console.log(value)
    })
    this.signUpForm.patchValue({
      userData: {
        username: 'puja'
      }
    })
  }
  onSubmit() {
    console.log(this.signUpForm)
    this.signUpForm.reset({
      gender:'male' //passing an object in reset to not reset this specific value
    })
  }

  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control)
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  //custom validators
  forbiddenNames(control: FormControl): { [s: string]: boolean } { // it takes inn control and return an object which has key value pair and key is of type string
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    } else {
      return null
    }
  }

  //making custom async validators
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test2@test.com') {
          resolve({ 'forbiddenEmail': true })
        } else {
          resolve(null)
        }
      }, 1000)
    })
    return promise
  }
}
