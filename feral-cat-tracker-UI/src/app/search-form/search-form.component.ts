import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { query } from '@angular/animations';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  searchTerm: string = '';
  queryType: string = 'all';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['query'] || '';
      this.queryType = params['queryType'] || 'all';
    });
  }

  searchCats({ searchTerm }: { searchTerm: string }) {
    console.log(searchTerm + 'Search Term');
    console.log(this.queryType + 'Query type');

    this.router.navigate(['/results'], {
      queryParams: { query: this.searchTerm, queryType: this.queryType },
      queryParamsHandling: 'merge',
    });
  }
}
