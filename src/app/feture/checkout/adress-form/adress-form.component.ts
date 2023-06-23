import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adress-form',
  templateUrl: './adress-form.component.html',
  styleUrls: ['./adress-form.component.scss']
})
export class AdressFormComponent {
  myForm: FormGroup =  this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
    phoneNumber: ['', Validators.required]
  });

  adresses=[1,1,1,1]

  constructor(private formBuilder: FormBuilder, private router:Router) {}

  // ngOnInit() {
  //   this.myForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     address: ['', Validators.required],
  //     city: ['', Validators.required],
  //     state: ['', Validators.required],
  //     zip: ['', Validators.required],
  //     phoneNumber: ['', Validators.required]
  //   });
  // }

  handleSubmit=()=>{
    const formValue=this.myForm.value;
this.router.navigate(["/checkout/payment"])
    console.log("handle submit - : ",formValue)
  }
}
