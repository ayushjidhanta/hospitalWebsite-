import { Component } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

constructor(private router: Router, private toast:NgToastService){}

openSuccess(){
  this.toast.success({detail:'Registered Successfully',summary:'Now Please Complete the Login', position:'tr', duration:3000})
}
showSpinner: boolean = false; 

  profileForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required , Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6) ])
  });
  
  onSubmit() {
    if (this.profileForm.valid) {
      const password = this.profileForm.get('password')?.value;
      const confirmPassword = this.profileForm.get('confirmPassword')?.value;
  
      if (password === confirmPassword) {
        let arrayData = JSON.parse(localStorage.getItem("formdata") || "[]");
        arrayData.push(this.profileForm.value);
        localStorage.setItem("formdata", JSON.stringify(arrayData));
        this.profileForm.reset();

        this.showSpinner = true;
        setTimeout(() => {
        this.openSuccess();
        this.showSpinner = false;
        this.openSuccess()
        this.router.navigate(["/login"]);
        }, 1000);

        
      } else { 
        let text1;
         text1 = "Error! Password Do Not Matched";
        (document.getElementById('errorThrow') as HTMLInputElement).innerHTML = text1;
      }
    } 
  }
  handleBack(){
    this.router.navigate(['/login']);
  }
}
