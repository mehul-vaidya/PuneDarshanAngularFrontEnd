// src/app/components/tourist-place.component.ts
import { Component, OnInit } from '@angular/core';
import { TouristPlaceService } from '../services/tourist-place.service';
import { TouristPlace } from '../models/tourist-place.model';

@Component({
  selector: 'app-tourist-place',
  templateUrl: './tourist-place.component.html'
})
export class TouristPlaceComponent implements OnInit {
  places: TouristPlace[] = [];

  constructor(private touristPlaceService: TouristPlaceService) {}

  ngOnInit() {
    this.loadPlaces();
  }

  loadPlaces() {
    this.touristPlaceService.getPlaces().subscribe((data) => {
      this.places = data;
    });
  }
}
