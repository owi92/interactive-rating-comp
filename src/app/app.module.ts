import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardContentComponent } from './card-content/card-content.component';
import { RatingComponent } from './rating/rating.component';
import { ThxStateComponent } from './thx-state/thx-state.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardContentComponent,
    RatingComponent,
    ThxStateComponent,
  ],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
