import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerFormCreate();
  }

  registerFormCreate(){
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern("^[a-z]|[A-Z]$")]],
      lastName: ['', [Validators.required, Validators.pattern("[a-z]|[A-Z]")]],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(){
    //create save function
  }

  ngOnInit(): void {
  }

}
