import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../authservice/auth-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerGroup!: FormGroup;
  constructor(private authService:AuthServiceService )
  {}
  ngOnInit(): void {
    this.initForm();
   } 
  initForm(){
    this.registerGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      phoneNumber: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirmPassword: new FormControl('',[Validators.required]),
    })
}

registerProcess(){
console.log("register")

    this.authService.register(this.registerGroup.value).subscribe(result => {})
  
  // if(this.formGroup.valid){
  //   this.http.post(`http://localhost:8080/register`, this.formGroup, {responseType: 'text'}).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Employee Registered Successfully");
  //   })
  }
}

