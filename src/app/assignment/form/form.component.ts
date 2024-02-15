import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  defaultValue = "basic"
  answer = ''
  genders = ['male', 'female']
  @ViewChild('f') signUpForm: NgForm
  user = {
    email: '',
    subscription: '',
    answer: '',
    gender: ''
  }
  constructor() { }
  ngOnInit(): void {

  }
  suggestEmail() {
    const sugestedEmail = 'puja.singh7655@gmail.com'
    this.signUpForm.form.patchValue({
      userData: {
        email: sugestedEmail,
      }
    })
  }
  onSubmit() {
    console.log("xyz", this.signUpForm)
    this.user.email=this.signUpForm.form.value.userData.email
    this.user.subscription=this.signUpForm.form.value.userData.subscription
    this.user.answer=this.signUpForm.form.value.questionAnswer
    this.user.email=this.signUpForm.form.value.userData.radio
  }
}
