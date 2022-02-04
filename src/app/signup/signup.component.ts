import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
   public sinupform !:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.sinupform= this.fb.group({
      firstname :['',Validators.required],
      lastname :['',Validators.required],
      email:['',Validators.email],
      pwd :['',Validators.required],
      
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/users",this.sinupform.value).subscribe(res=>{
      this.sinupform.reset;
      this.route.navigate(["/login"])
    },err=>{
      alert("error!!!!!!")
    }
    )
  }
}
