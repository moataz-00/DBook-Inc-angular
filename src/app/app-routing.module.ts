import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LoginComponent } from './data/login/login.component';
import { EditstudentComponent } from './data/student/editstudent/editstudent.component';
import { GetstudentComponent } from './data/student/getstudent/getstudent.component';
import { PoststudentComponent } from './data/student/poststudent/poststudent.component';
import { ShowstudentComponent } from './data/student/showstudent/showstudent.component';
import { StudentregiserComponent } from './data/studentregiser/studentregiser.component';
import { EditteacherComponent } from './data/teacher/editteacher/editteacher.component';
import { GetteacherComponent } from './data/teacher/getteacher/getteacher.component';
import { PostteacherComponent } from './data/teacher/postteacher/postteacher.component';
import { ShowteacherComponent } from './data/teacher/showteacher/showteacher.component';
import { TeacherregiserComponent } from './data/teacherregiser/teacherregiser.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';




const routes: Routes = [
//home
{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
//contact
{path:"contact",component:ContactComponent},
//evente
{path:"event",component:EventsComponent},
//about
{path:"about",component:AboutComponent},
//pricing
{path:"pricing",component:PricingComponent},

//course-details
{path:"course-details",component:CourseDetailsComponent},

//student

//post
{path:"create-student",component:PoststudentComponent},
//student register
{path:"student-register",component:StudentregiserComponent},

//get
{path:"show-students",component:GetstudentComponent},


//show one student
{path:"show-student/:id",component:ShowstudentComponent},

//update
{path:"edit-student/:id",component:EditstudentComponent},


//teacher

//post
{path:"create-teacher",component:PostteacherComponent},

//teacher register
{path:"teacher-register",component:TeacherregiserComponent},

//get
{path:"show-teachers",component:GetteacherComponent},

//show one teacher
{path:"show-teacher/:id",component:ShowteacherComponent},

//update
{path:"edit-teacher/:id",component:EditteacherComponent},

//login
{path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule {


 }
