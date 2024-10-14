import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TouristPlaceService } from '../services/tourist-place.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html'
})
export class AdminConsoleComponent {
  placeUpdateForm: FormGroup;

  constructor(private fb: FormBuilder, private touristPlaceService: TouristPlaceService, private router: Router) {
    this.placeUpdateForm = this.fb.group({
      placename: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.placeUpdateForm.valid) {
      this.touristPlaceService.updatePlace(this.placeUpdateForm.value).subscribe({
        next: (response) => {
          alert('Updated/Added Successfully');
        },
        error: () => {
          alert('Error in Update/Add');
        }
      });
    }
  }
}
