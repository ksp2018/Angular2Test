import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StarRatingComponent],
  bootstrap: [StarRatingComponent]
})
export class StarRatingModule { }

