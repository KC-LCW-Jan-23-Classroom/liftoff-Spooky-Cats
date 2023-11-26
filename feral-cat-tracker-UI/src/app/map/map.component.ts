import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap } from '@angular/google-maps';
import { OnInit } from '@angular/core';
import { Cat } from '../models/cat';
import { FindcatserviceService } from '../findcatservice/findcatservice.service';
import { Googleservice } from '../googleservice';
import { GeocoderResponse } from '../geocoder-response';
import { Marker, Position } from '../models/marker';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {

  showLoadErrorMessage = false;
  cats: Cat[] = [];
  catAddress = [];
  catCoordinates = [];
  locationCoords?: google.maps.LatLng | null = null;

  constructor(private findcatService: FindcatserviceService, private googleserviceService: Googleservice) {}
 
  @ViewChild(GoogleMap) map!: GoogleMap;
  ngOnInit(){
    this.findcatService.find().subscribe(data => {

      this.showLoadErrorMessage = false;
      this.cats = data;
      for(let i=0; i < this.cats.length; i++){
        this.catAddress.push(this.cats[i].addressLastSeen);
    }
    console.log(this.catAddress)

    for(let i =0; i < this.catAddress.length; i++){
      this.googleserviceService.getLocation(this.catAddress[i]).subscribe(
        (response: GeocoderResponse) => {
          console.log("Get Coordinates Loop #"+i)
          console.log(this.catAddress[i])
          console.log(response);
          if (response.status === 'OK' && response.results?.length) {
          const location = response.results[0];
          const loc: any = location.geometry.location;
          this.locationCoords = new google.maps.LatLng(loc.lat, loc.lng);
          const point = new Position(loc.lat, loc.lng);
          this.catCoordinates.push(point);
          console.log(point);
          const bounds = this.getBounds(this.catCoordinates);
          this.map.googleMap.fitBounds(bounds);
          }
      })

    }

    console.log(this.catCoordinates)

    }, (error) => {
      this.showLoadErrorMessage = true;
    })
  
  }

  
  getBounds(catCoordinates){
    let north;
    let south;
    let east;
    let west;
  
    for (const marker of catCoordinates){
      // set the coordinates to marker's lat and lng on the first run.
      // if the coordinates exist, get max or min depends on the coordinates.
      console.log("Get Bounds For Loop")
      console.log(marker)
      north = north !== undefined ? Math.max(north, marker.lat) : marker.lat;
      south = south !== undefined ? Math.min(south, marker.lat) : marker.lat;
      east = east !== undefined ? Math.max(east, marker.lng) : marker.lng;
      west = west !== undefined ? Math.min(west, marker.lng) : marker.lng;
    };
    north = parseFloat(north);
    south = parseFloat(south);
    east = parseFloat(east);
    west = parseFloat(west);
    const bounds = { north, south, east, west };
    return bounds;
  }
}
