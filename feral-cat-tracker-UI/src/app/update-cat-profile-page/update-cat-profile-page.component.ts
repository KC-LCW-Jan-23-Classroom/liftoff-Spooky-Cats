import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../models/cat';
import { FindcatserviceService } from '../findcatservice/findcatservice.service';
import {  AbstractControl,
  FormGroup,
  FormControl,
  Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { LogcatserviceService } from '../logcatservice/logcatservice.service';

export type catSearchDisplay = Partial<Cat>

@Component({
  selector: 'app-update-cat-profile-page',
  templateUrl: './update-cat-profile-page.component.html',
  styleUrls: ['./update-cat-profile-page.component.css']
})
export class UpdateCatProfilePageComponent implements OnInit {
  microchipNumber= ""
  updateCat!: Cat;
  showSuccessMessage = false;
  showSubmitButton= true;
  showSubmitErrorMessage = false;
  submitted = false;
  currentFile: File;
  selectedFiles: FileList;
  catForm!: FormGroup;
  formvalue : string;
  updateButtonText = "Submit Updates"

  initForm() {
    this.catForm = new FormGroup(
      {
        microchipNumber: new FormControl(this.updateCat.microchipNumber, [Validators.required]),
        name: new FormControl(this.updateCat.name, [Validators.required]),
        addressLastSeen: new FormControl(this.updateCat.addressLastSeen, [Validators.required]),
        sex: new FormControl(this.updateCat.sex, [Validators.required]),
        breed: new FormControl(this.updateCat.breed, [Validators.required]),
        color: new FormControl(this.updateCat.color, [Validators.required]),
        furType: new FormControl(this.updateCat.furType, [Validators.required]),
        weight: new FormControl(this.updateCat.weight),
        estimatedAge: new FormControl(this.updateCat.estimatedAge),
        alteredStatus: new FormControl(this.updateCat.alteredStatus),
        rabiesVaccineDate: new FormControl(this.updateCat.rabiesVaccineDate),
        distemperVaccineDate: new FormControl(this.updateCat.distemperVaccineDate),
        fhvVaccineDate: new FormControl(this.updateCat.fhvVaccineDate),
        fivVaccineDate: new FormControl(this.updateCat.fivVaccineDate),
        felvVaccineDate: new FormControl(this.updateCat.felvVaccineDate),
        bordetellaVaccineDate: new FormControl(this.updateCat.bordetellaVaccineDate),
        dateCaptured: new FormControl(this.updateCat.dateCaptured),
        notes: new FormControl(this.updateCat.notes),
        image: new FormControl(),
        fileName: new FormControl(this.updateCat.fileName),
        type: new FormControl(),
        data: new FormControl(this.updateCat.data),
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

   

  onImgError(event) { 
    event.target.src = '/assets/FeralCatTrackLogo.png';
}

  
    constructor(private route: ActivatedRoute, private findcatService: FindcatserviceService, private router: Router, private catservice:LogcatserviceService) {
    
       }
  
       ngOnInit(): void {
        this.route.queryParams.subscribe((params: any) => {
          console.log(params)
          this.microchipNumber = params["microchipNumber"]
          this.findcatService.findCatByMicrochipNumber(this.microchipNumber).subscribe((data) => {
            this.updateCat = data;
            console.log(JSON.stringify(this.updateCat) + "**response.cats**")
            this.initForm();

          })
        })
 
      }

      postUpdateCat() {
        this.showSuccessMessage = false;
        this.showSubmitButton = true;
        this.submitted= true;
        this.showSubmitErrorMessage = false;
        
    
    if(this.selectedFiles != null){
      this.currentFile = this.selectedFiles.item(0);
    } else {
      this.currentFile = null
    }
        console.log(this.currentFile);
    
        if(this.catForm.invalid) {
          console.log("invalid")
          return;
        }
            
      
        if(this.catForm.valid){
          this.formvalue = JSON.stringify(this.catForm.value);
        this.catservice.update(this.formvalue, this.currentFile).subscribe(
    
          (result) => {
            {          
              this.showSuccessMessage = true;
              this.showSubmitButton = true;
              this.showSubmitErrorMessage = false;
              this.updateButtonText= "Cat Updated Successfully!"
          setTimeout(() => {
                 this.router.navigate(['/catProfile'],
                  {queryParams:{ microchipNumber: this.updateCat.microchipNumber }}
                  ); //TODO: navigate to page for created cat.
          } , 5000);
        }
          
          },
          (error) => {
            this.showSuccessMessage = false;
            this.showSubmitButton = true; 
            this.showSubmitErrorMessage= true
            this.updateButtonText = "Submit Updates"
            
          }
        );
        }
    
      }
  }