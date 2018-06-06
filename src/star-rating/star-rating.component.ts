import { Component } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  // change this number to see different results
  rateValue: number = 5;

    counter(i: number) {
      return new Array(i);
  }
}

