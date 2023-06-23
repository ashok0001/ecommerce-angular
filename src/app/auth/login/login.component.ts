import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  registrationForm: FormGroup= this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });;

  constructor(private formBuilder: FormBuilder) {}



  submitForm(): void {
    if (this.registrationForm.valid) {
      // Handle form submission logic here
      console.log("login req data",this.registrationForm.value);
    }
  }
}
