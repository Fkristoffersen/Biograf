import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CinemaoverviewComponent } from './cinemaoverview/cinemaoverview.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { LoginComponent } from './login/login.component';
import { CandystoreComponent } from './candystore/candystore.component';
import { MoviesComponent } from './movies-page/movies/movies.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MovieItemComponent } from './movies-page/movie-item/movie-item.component';
import { ChooseDayComponent } from './movies-page/choose-day/choose-day.component';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';
import { ChooseTimeComponent } from './movies-page/choose-time/choose-time.component';
import { TicketComponent } from './movies-page/ticket/ticket.component';
import { AddEditComponent } from './candystore/add-edit/add-edit.component';
// import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SlideshowComponent,
    CinemaoverviewComponent,
    LoginComponent,
    CandystoreComponent,
    MoviesComponent,
    HomeComponent,
    ContactComponent,
    MovieItemComponent,
    ChooseDayComponent,
    SignupComponent,
    ResetComponent,
    ChooseTimeComponent,
    TicketComponent,
    AddEditComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgImageSliderModule,
    HttpClientModule,

//     HttpClientInMemoryWebApiModule.forRoot( //Intercepts HTTP requests and returns simulated server responses
//       InMemoryDataService, { dataEncapsulation: false }
// )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
