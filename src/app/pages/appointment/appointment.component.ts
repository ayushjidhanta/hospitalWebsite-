import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  appointmentData = new FormGroup({
    FirstName: new FormControl("",[Validators.required]),
    LastName: new FormControl("",[Validators.required]),
    rstName: new FormControl(),
    Address: new FormControl("",[Validators.required]),
    Email: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required]),
    textarea: new FormControl(),
  });

 onSubmit(){
 console.log(this.appointmentData);
 if (this.appointmentData.valid){
  let ArrayData = JSON.parse(localStorage.getItem("ArrayData") || "[]");
  ArrayData.push(this.appointmentData.value);
  localStorage.setItem("appointmentData", JSON.stringify(ArrayData));
  this.appointmentData.reset();
 }
 }
}
