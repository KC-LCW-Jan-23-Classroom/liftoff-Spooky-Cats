import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../models/cat';
import { FindcatserviceService } from '../findcatservice/findcatservice.service';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
searchTerm = ""
queryType= ""
results: Cat[] = []
cats: Cat[] = [];

  constructor(private route: ActivatedRoute, private findcatService: FindcatserviceService) {
  
     }

     ngOnInit(): void {
      this.route.queryParams.subscribe((params: any) => {
        console.log(params)
        this.searchTerm = params["query"]
        this.queryType = params["queryType"]
        this.findcatService.search(this.searchTerm, this.queryType).subscribe((data) => {
          this.cats = data;
          console.log(this.cats + "**response.cats**")
          console.log("search-results: " + this.queryType )
        })
      })
    }
}
