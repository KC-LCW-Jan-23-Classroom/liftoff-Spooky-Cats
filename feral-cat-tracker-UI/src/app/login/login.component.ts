import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { AuthServiceService } from '../authservice/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   formGroup!: FormGroup;
  constructor(private authService:AuthServiceService){}
 ngOnInit(): void {
  this.initForm();
 } 
initForm(){
  this.formGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })
}
loginProcess(){


  if(this.formGroup.valid){
    this.authService.login(this.formGroup.value).subscribe(result => {})
  }
}

}


/* result=> {
      if(result.getHeaders().statusCode === 201) {
        console.log(result);  
        alert("Hello, " + result.firstName + "!");
      } else {
        alert(result.bad)
      }
    }  chatgpt */

    /* result => {alert("Hello, " + result.firstName + "!")} */

   /* result=> {
      if(result.created) {
        console.log(result.created);  
        alert("Hello, " + result.firstName + "!");
      } else {
        console.log(result.created)
        alert(result.bad_request)
      }
    } */