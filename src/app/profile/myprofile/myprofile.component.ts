import { Component } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  firstname : any;
  lastname: any;
  email: any;
  
  ngOnInit() {
    
    const storedData = localStorage.getItem("Profile");
  
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.firstname = parsedData.firstName;
      this.lastname = parsedData.lastName
      this.email = parsedData.email;
    }
  }
}
