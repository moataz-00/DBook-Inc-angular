import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import{ HttpClientModule}from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { EventsComponent } from './events/events.component';
import { PricingComponent } from './pricing/pricing.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { GetstudentComponent } from './data/student/getstudent/getstudent.component';
import { PoststudentComponent } from './data/student/poststudent/poststudent.component';
import { EditstudentComponent } from './data/student/editstudent/editstudent.component';
import { GetteacherComponent } from './data/teacher/getteacher/getteacher.component';
import { PostteacherComponent } from './data/teacher/postteacher/postteacher.component';
import { EditteacherComponent } from './data/teacher/editteacher/editteacher.component';
import { ShowstudentComponent } from './data/student/showstudent/showstudent.component';
import { ShowteacherComponent } from './data/teacher/showteacher/showteacher.component';
import { LoginComponent } from './data/login/login.component';
import { StudentregiserComponent } from './data/studentregiser/studentregiser.component';
import { TeacherregiserComponent } from './data/teacherregiser/teacherregiser.component';


@NgModule({
  declarations: [


    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CourseDetailsComponent,
    EventsComponent,
    PricingComponent,
    NavComponent,
    FooterComponent,
    GetstudentComponent,

    PoststudentComponent,
    EditstudentComponent,
    GetteacherComponent,
    PostteacherComponent,
    EditteacherComponent,
    ShowstudentComponent,
    ShowteacherComponent,
    LoginComponent,
    StudentregiserComponent,
    TeacherregiserComponent,


  ],
  imports: [
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
