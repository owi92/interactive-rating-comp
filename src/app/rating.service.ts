import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  private displaySource = new BehaviorSubject<boolean>(false);
  isSubmit = this.displaySource.asObservable();

  private ratingSource = new BehaviorSubject<number>(0);
  rating = this.ratingSource.asObservable();

  constructor() {}

  changeDisplay(isSubmit: boolean, rating: number) {
    this.displaySource.next(isSubmit);
    this.ratingSource.next(rating);
    console.log(isSubmit, rating);
  }
}
