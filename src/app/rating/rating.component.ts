import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  ratings: number[] = [1, 2, 3, 4, 5];
  rating!: number;
  isSubmitted!: boolean;
  constructor(private ratingService: RatingService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.value.rating) {
      this.rating = form.value.rating;
      this.isSubmitted = true;
      //console.log(form.value.rating);
      this.changeRating();
    }
  }

  changeRating() {
    this.ratingService.changeDisplay(this.isSubmitted, this.rating);
  }
}
