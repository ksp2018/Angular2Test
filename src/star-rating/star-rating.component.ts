import { Component } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  rateValue: number = 4;

    counter(i: number) {
      return new Array(i);
  }
}

