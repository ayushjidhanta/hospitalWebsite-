import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentications/login/login.component';
import { SignupComponent } from './authentications/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Home/home/home.component';
import { NgToastModule } from 'ng-angular-popup';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { ShortdiscriptionComponent } from './components/shortdiscription/shortdiscription.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ScheduledComponent } from './pages/scheduled/scheduled.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';
import { SettingComponent } from './profile/setting/setting.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    CardComponent,
    ShortdiscriptionComponent,
    FooterComponent,
    AppointmentComponent,
    ScheduledComponent,
    ServicesComponent,
    AboutusComponent,
    ReviewsComponent,
    PrivacypolicyComponent,
    MyprofileComponent,
    SettingComponent,
  ],
  imports: [

    BrowserModule,
    NgToastModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
