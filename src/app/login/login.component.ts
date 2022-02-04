import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginform !:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router) { }
  ngOnInit(): void {
    this.loginform= this.fb.group({
      email:['',Validators.email],
      pwd :['',Validators.required],
      
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email===this.loginform.value.email && a.pwd===this.loginform.value.pwd;
      }); 
      if (user){
        this.route.navigate(["/dashboard"])
      }else
      {
        alert("user not found !!!!")
      }
      
    },err=>{
      alert("error!!!!!!")
    })
  }
} 
