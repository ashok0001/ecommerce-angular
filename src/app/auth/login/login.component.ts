import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/state/Auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input()
  changeTemplate!: () => void;

  loginForm: FormGroup= this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });;

  constructor(private formBuilder: FormBuilder, private store:Store) {}



  submitForm(): void {
    if (this.loginForm.valid) {
      // Handle form submission logic here
      console.log("login req data",this.loginForm.value);
      this.store.dispatch(login(this.loginForm.value))
    }
  }
}
