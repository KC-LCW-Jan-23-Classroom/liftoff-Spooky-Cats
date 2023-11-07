import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent {
  searchTerm!: string; 
  constructor(private router: Router) {}

  searchCats({ searchTerm }: { searchTerm: string }) {
    console.log(searchTerm);
    this.router.navigate(['/results'], {queryParams: {query: searchTerm}});
  }
}
