import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { users } from './../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  alldata:users[]=[];
  name:any
  pass:any
  error:any
constructor(private serv:UserService,private route:Router){
  this.serv.get().subscribe(data=>{

  })
}

login(){
  this.serv.get().subscribe((data:any)=>{
for(let i=0;i<data.length;i++){
  if(data[i].name==this.name&&data[i].pass==this.pass){
    this.route.navigateByUrl("show-students")
  }else{
    this.error="soory try again"
  }
}


  })
}
}
