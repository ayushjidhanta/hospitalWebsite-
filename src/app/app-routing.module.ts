import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentications/login/login.component';
import { SignupComponent } from './authentications/signup/signup.component';
import { HomeComponent } from './Home/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ScheduledComponent } from './pages/scheduled/scheduled.component';
import { ServicesComponent } from './pages/services/services.component';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';
import { SettingComponent } from './profile/setting/setting.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'appointment',component:AppointmentComponent
  },
  {
    path:'scheduled', component:ScheduledComponent
  },
  {
    path:'aboutus',component:AboutusComponent
  },
  {
    path:'reviews',component:ReviewsComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'privacypolicy',component:PrivacypolicyComponent
  },
  {
    path:'myprofile',component:MyprofileComponent
  },
  {
    path:'setting',component:SettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
