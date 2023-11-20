import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../models/cat';
import { FindcatserviceService } from '../findcatservice/findcatservice.service';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LogcatserviceService } from '../logcatservice/logcatservice.service';

export type catSearchDisplay = Partial<Cat>

@Component({
  selector: 'app-update-cat-profile-page',
  templateUrl: './update-cat-profile-page.component.html',
  styleUrls: ['./update-cat-profile-page.component.css']
})
export class UpdateCatProfilePageComponent {
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
            console.log(this.updateCat + "**response.cats**")
          })
        }) 
      }

      postUpdateCat() {
        this.showSuccessMessage = false;
        this.showSubmitButton = true;
        this.submitted= true;
        this.showSubmitErrorMessage = false;
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
        this.catservice.update(this.formvalue, this.currentFile).subscribe(
    
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