import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
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
      console.log(parsedData.firstname)
    }
  }
}
