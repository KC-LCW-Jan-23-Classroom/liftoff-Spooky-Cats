import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LogcatserviceService } from '../logcatservice/logcatservice.service';

@Component({
  selector: 'app-logcat',
  templateUrl: './logcat.component.html',
  styleUrls: ['./logcat.component.css']
})
export class LogcatComponent implements OnInit{
  formvalue : string;

  currentFile: File;
  selectedFiles: FileList;
  catForm!: FormGroup;
  showSuccessMessage = false;
  showSubmitButton= true;
  showSubmitErrorMessage = false;
  submitted = false;
  constructor(
    private router: Router,
    private catservice:LogcatserviceService

  ) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.catForm = new FormGroup(
      {
        microchipNumber: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        addressLastSeen: new FormControl('', [Validators.required]),
        sex: new FormControl('', [Validators.required]),
        breed: new FormControl('', [Validators.required]),
        color: new FormControl('', [Validators.required]),
        furType: new FormControl('', [Validators.required]),
        weight: new FormControl(),
        estimatedAge: new FormControl(),
        alteredStatus: new FormControl(),
        rabiesVaccineDate: new FormControl(),
        distemperVaccineDate: new FormControl(),
        fhvVaccineDate: new FormControl(),
        fivVaccineDate: new FormControl(),
        felvVaccineDate: new FormControl(),
        bordetellaVaccineDate: new FormControl(),
        dateCaptured: new FormControl(),
        notes: new FormControl(),
        image: new FormControl(),
        fileName: new FormControl(),
        type: new FormControl(),
        data: new FormControl(),
        lastModifiedUser: new FormControl()
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.catForm.controls;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


  logCat() {
    this.showSuccessMessage = false;
    this.showSubmitButton = true;
    this.submitted= true;
    this.showSubmitErrorMessage = false;
    console.log("log cat");
    console.log(this.catForm.value);
    this.submitted= true;

if(this.selectedFiles != null){
  this.currentFile = this.selectedFiles.item(0);
} else {
  this.currentFile = null
}
    console.log(this.currentFile);

    if(this.catForm.invalid) {
      return;
    }
  
    if(this.catForm.valid){
      this.formvalue = JSON.stringify(this.catForm.value);
    this.catservice.log(this.formvalue, this.currentFile).subscribe(

      (result) => {
        {          
          this.showSuccessMessage = true;
          this.showSubmitButton = false;
          this.showSubmitErrorMessage = false;
      setTimeout(() => {
             this.router.navigate(['/find']); //TODO: navigate to page for created cat.
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