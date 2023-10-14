import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
 } //ngForm 
initForm(){
  this.formGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })
}
loginProcess(){
  if(this.formGroup.valid){
    this.authService.login(this.formGroup.value).subscribe(result=> {
      if(result.success) {
        console.log(result);  
        alert(result.message);
      } else {
        alert(result.message)
      }
    })
  }
}


}


