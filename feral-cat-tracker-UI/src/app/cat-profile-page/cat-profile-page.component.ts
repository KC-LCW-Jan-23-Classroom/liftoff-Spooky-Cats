import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../models/cat';
import { FindcatserviceService } from '../findcatservice/findcatservice.service';

export type catSearchDisplay = Partial<Cat>

@Component({
  selector: 'app-cat-profile-page',
  templateUrl: './cat-profile-page.component.html',
  styleUrls: ['./cat-profile-page.component.css']
})
export class CatProfilePageComponent {
  microchipNumber= ""
  cat!: Cat;
  
    constructor(private route: ActivatedRoute, private findcatService: FindcatserviceService) {
    
       }
  
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
  }