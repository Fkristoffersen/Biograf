import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { CandystoreComponent } from './candystore/candystore.component';
import { MoviesComponent } from './movies-page/movies/movies.component';
import { ChooseDayComponent } from './movies-page/choose-day/choose-day.component';
import { ChooseTimeComponent } from './movies-page/choose-time/choose-time.component';
import { TicketComponent } from './movies-page/ticket/ticket.component'; 
import { CinemaoverviewComponent } from './cinemaoverview/cinemaoverview.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';
import { AddEditComponent } from './candystore/add-edit/add-edit.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'candystore', component: CandystoreComponent },
  {path: 'movies', component: MoviesComponent },
  {path: 'billet', component: ChooseDayComponent },
  {path: 'choose-time', component: ChooseTimeComponent },
  {path: 'ticket', component: TicketComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'reset', component: ResetComponent},
  {path: 'add-edit', component: AddEditComponent},
  {path: 'test', component: AddEditComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { };

 