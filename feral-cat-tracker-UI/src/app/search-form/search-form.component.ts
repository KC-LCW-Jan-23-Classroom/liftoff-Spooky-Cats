import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent {
  searchTerm!: string; 
  queryMicrochip!: string; 
  queryLocation!: string;
  constructor(private router: Router) {}

  searchCats({ searchTerm }: { searchTerm: string }) {
    let queryType: string;
    if (this.queryMicrochip === 'microchip') {
      queryType = 'microchip';
    } else if (this.queryLocation === 'location') {
      queryType = 'location';
    } else {
      queryType = 'all'; // Default to "all" if no radio button is selected
    }
    console.log(searchTerm + "Search Term");
    console.log(queryType + "Query type")
    this.router.navigate(['/results'], {queryParams: {query: searchTerm, queryType: queryType }});
  }
}
