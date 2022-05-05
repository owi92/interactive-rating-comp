import { Component, OnInit } from '@angular/core';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-thx-state',
  templateUrl: './thx-state.component.html',
  styleUrls: ['./thx-state.component.css'],
})
export class ThxStateComponent implements OnInit {
  rating!: number;
  constructor(private ratingService: RatingService) {}

  ngOnInit(): void {
    this.ratingService.rating.subscribe((data) => {
      this.rating = data;
    });
  }
}
