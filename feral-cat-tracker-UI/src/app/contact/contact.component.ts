import { Component, OnInit} from '@angular/core';
import { ContactserviceService } from '../contactservice/contactservice.service';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder,  FormsModule,
  ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';


export class contactData{
  name: string;
  email: string;
  phoneNumber: string;
  reasonForContact: string;
  message: string;

  constructor(name:string, email: string, phoneNumber: string, reasonForContact: string, message: string){
      this.name=name;
      this.email=email;
      this.phoneNumber=phoneNumber;
      this.reasonForContact=reasonForContact;
      this.message=message;
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  showSuccessMessage = false;
  showSubmitButton= true;
  showSubmitErrorMessage = false;

  formGroup!: FormGroup;
  constructor(
    private contactService:ContactserviceService,
    private router: Router){}

  ngOnInit():void{
    this.initForm();
  }

  contactGroup!: FormGroup
  submitted = false

  initForm(){
    this.contactGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', []),
      reasonForContact: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  get f(): { [key:string]: AbstractControl }{
    return this.contactGroup.controls;
  }


onClickSubmit(){
  this.showSuccessMessage = false;
  this.showSubmitButton = true;
  this.submitted= true;
  this.showSubmitErrorMessage = false;

  if(this.contactGroup.invalid) {
    // this.contactService;
    return;
  }

  if(this.contactGroup.valid){


    //check validation
    this.contactService.contact(this.contactGroup.value).subscribe(
   
   
   
      (result) => {
        {          
          this.showSuccessMessage = true;
          this.showSubmitButton = false;
          this.showSubmitErrorMessage = false;
      setTimeout(() => {
             this.router.navigate(['/']);
      } , 5000);
    }
      
      },
      (error) => {
        this.showSuccessMessage = false;
        this.showSubmitButton = true; 
        this.showSubmitErrorMessage= true
        
      }
    );
  }
}
}


   
   
   
   
   
