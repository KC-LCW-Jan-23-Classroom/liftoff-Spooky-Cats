import { Component, OnInit } from '@angular/core';
import { Cat } from '../models/cat';
import { FindcatserviceService } from '../findcatservice/findcatservice.service';
@Component({
  selector: 'app-findcat',
  templateUrl: './findcat.component.html',
  styleUrls: ['./findcat.component.css'],
})
export class FindcatComponent {
  cats: Cat[] = [];

  constructor(private findcatService: FindcatserviceService) {}

  ngOnInit() {
    this.findcatService.find().subscribe((data) => {
      this.cats = data;

      console.log(data);
      console.log(this.cats);
    });
  }
}
