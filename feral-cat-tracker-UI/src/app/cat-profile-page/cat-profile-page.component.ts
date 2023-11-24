import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../models/cat';
import { FindcatserviceService } from '../findcatservice/findcatservice.service';
import { DeleteCatServiceService } from '../delete-cat-service/delete-cat-service.service';
import { Router } from '@angular/router';

export type catSearchDisplay = Partial<Cat>

@Component({
  selector: 'app-cat-profile-page',
  templateUrl: './cat-profile-page.component.html',
  styleUrls: ['./cat-profile-page.component.css']
})
export class CatProfilePageComponent {
  microchipNumber= ""
  cat!: Cat;
  showDeleteSuccessMessage = false;
  showDeleteButton= true;
  showDeleteErrorMessage = false;
  deleted = false;
  deleteButtonText = "Delete Cat";

   

  onImgError(event) { 
    event.target.src = '/assets/FeralCatTrackLogo.png';
}

  
    constructor(private route: ActivatedRoute, 
      private findcatService: FindcatserviceService,
       private deleteCatService: DeleteCatServiceService,
       private router: Router) {}
  
       ngOnInit(): void {
        this.route.queryParams.subscribe((params: any) => {
          console.log(params)
          this.microchipNumber = params["microchipNumber"]
          this.findcatService.findCatByMicrochipNumber(this.microchipNumber).subscribe((data) => {
            this.cat = data;
            console.log(this.cat + "**response.cats**")
          })
        }) 
      }

      deleteCat() {
        this.showDeleteSuccessMessage = false;
        this.showDeleteButton = true;
        this.deleted= true;
        this.showDeleteErrorMessage = false;
        
        if(confirm("Are you sure you want to delete " +this.cat.name +"? This cannot be undone!")){
    
        this.deleteCatService.deleteCatByMicrochipNumber(this.microchipNumber).subscribe(
    
          (result) => {
            {          
              this.showDeleteSuccessMessage = true;
              this.showDeleteButton = true;
              this.showDeleteErrorMessage = false;
              this.deleteButtonText = "Cat Deleted!"
          setTimeout(() => {
                 this.router.navigate(['/find'],
                
                  ); 
          } , 5000);
        }
          
          },
          (error) => {
            this.showDeleteSuccessMessage = false;
            this.showDeleteButton = true; 
            this.showDeleteErrorMessage= true
            this.deleteButtonText = "Delete Cat"
            
          }
        );
        }
      }
      }
  