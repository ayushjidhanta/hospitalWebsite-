import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showSpinner: boolean = false;
constructor(private router: Router){

}
  logout(){
        this.showSpinner = true;
        setTimeout(() => {
          localStorage.removeItem("Profile");
        this.router.navigate(["/login"])
        this.showSpinner = false;
        }, 2000);
  }
}
