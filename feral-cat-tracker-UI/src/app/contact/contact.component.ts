import { Component } from '@angular/core';

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
export class ContactComponent {

  selectedSubject!: string;

  onSelected(value:string): void {
		this.selectedSubject = value;
	}

  onClickSubmit(data: contactData) {
    // HTMLOutputElement.post(localhost:8080/contact,data);
    alert("To do: ACTUALLY submit" + JSON.stringify(data) + this.selectedSubject);
 }
  

}