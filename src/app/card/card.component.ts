import { Component, OnInit } from '@angular/core';
import { RatingService } from '../rating.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('500ms 300ms ease-in', style({ opacity: 1 })),
        ],
        {
          delay: 2000,
        }
      ),
    ]),
    trigger('fadeOut', [
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CardComponent implements OnInit {
  submitted!: boolean;
  rating!: number;
  constructor(private ratingService: RatingService) {}

  ngOnInit(): void {
    this.ratingService.isSubmit.subscribe((data) => {
      this.submitted = data;
    });
    this.ratingService.rating.subscribe((data) => {
      this.rating = data;
    });
  }
}
