import { Component, OnInit} from '@angular/core';

import { ContactserviceService } from '../contactservice/contactservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class contactData{
  name: string;
  email: string;
  phoneNumber: string;
  selectedSubject: string;
  message: string;

  constructor(name:string, email: string, phoneNumber: string, selectedSubject: string, message: string){
      this.name=name;
      this.email=email;
      this.phoneNumber=phoneNumber;
      this.selectedSubject=selectedSubject;
      this.message=message;
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  formGroup!: FormGroup;
  constructor(private contactService:ContactserviceService){}
  ngOnInit():void{
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      selectedSubject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    })
  }

//   onClickSubmit(data: contactData) {
//     // HTMLOutputElement.post(localhost:8080/contact,data);
//     alert("To do: ACTUALLY submit" + JSON.stringify(data));
//  }

onClickSubmit(){

  if(this.formGroup.valid){
    this.contactService.contact(this.formGroup.value).subscribe(result => alert(result))
  }
}
  
  

}