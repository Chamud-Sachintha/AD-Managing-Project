import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      firstName: [''],
      lastName: [''],
      emailAddress: [''],
      password: ['']
    });
  }

  onSubmit(){
    //create save function
  }

  ngOnInit(): void {
  }

}
