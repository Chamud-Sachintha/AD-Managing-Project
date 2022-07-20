import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createSignInForm();
  }

  createSignInForm(){
    this.signInForm = this.formBuilder.group({
      userName: [''],
      password: ['']
    });
  }

  onSignIn(){
    //create login function
  }

  ngOnInit(): void {
  }

}
