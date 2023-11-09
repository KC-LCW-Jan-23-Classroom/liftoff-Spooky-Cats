import { Component, Input } from '@angular/core';
import { Cat } from '../models/cat';

export type catSearchDisplay = Partial<Cat>

@Component({
  selector: 'app-cat-card-ui',
  templateUrl: './cat-card-ui.component.html',
  styleUrls: ['./cat-card-ui.component.css']
})

export class CatCardUiComponent {

  @Input()
  cat!: catSearchDisplay; 

  onImgError(event) { 
    event.target.src = '/assets/FeralCatTrackLogo.png';
}

}
