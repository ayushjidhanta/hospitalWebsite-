import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  openSuccess(){
    this.toast.success({detail:'Login Successful',summary:'Home page', position:'tr', duration:3000})
  }

  constructor( private router: Router, private formBuilder: FormBuilder, private toast: NgToastService) {}
  showSpinner: boolean = false;
  
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required , Validators.email]),
    password: new FormControl("",[Validators.required]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      const formData = JSON.parse(localStorage.getItem('formdata') || '[]');
      const user = formData.find((data: any) => data.email === email && data.password === password);

      if (user) {
        console.log("user Data" + user.email +"" +user.password );

        this.showSpinner = true;
        setTimeout(() => {
        this.openSuccess();
        console.log('Login successful');
        this.showSpinner = false;
        this.router.navigate(['/home']);
        }, 2000);

      } else {
        console.log('Invalid email or password');
        let text2;
        text2 = "Invalid Email and Password ";
        (document.getElementById('errorlogin') as HTMLInputElement).innerHTML = text2;
      }
      
      var loggedIn = formData.find(
        (x:any)=>x.email == email && x.password == password);
        if (loggedIn){
          localStorage.setItem("Profile", JSON.stringify(loggedIn));
          
        }
    }
  }
}
