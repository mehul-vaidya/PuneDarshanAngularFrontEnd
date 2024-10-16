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
  placeDeleteForm: FormGroup;

  constructor(private fb: FormBuilder, private touristPlaceService: TouristPlaceService, private router: Router) {
    this.placeUpdateForm = this.fb.group({
      placename: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.placeDeleteForm = this.fb.group({
      placenameDelete: ['', Validators.required]
    })
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

/*
  onSubmitDelete() {
    if (this.placeDeleteForm.valid) {
      this.touristPlaceService.deletePlace(this.placeDeleteForm.value).subscribe({
        next: (response) => {
          alert('Deleted Successfully');
        },
        error: () => {
          alert('Error in Deletion');
        }
      });
    }
  }
*/

  onSubmitDelete() {
    if (this.placeDeleteForm.valid) {
      const placeName = this.placeDeleteForm.value.placenameDelete;
      this.touristPlaceService.deletePlace(placeName).subscribe({
        next: (response) => {
          if (response.success_or_fail === 'Success') {
           alert('Tourist place deleted successfully.');
           this.placeDeleteForm.reset();
          } else {
           alert('Failed to delete the tourist place.');
          }
        },
        error: () => {
          alert('Error in Deletion');
        },
      });
    }
  }


}
