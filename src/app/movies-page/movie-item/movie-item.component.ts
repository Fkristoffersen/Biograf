import { Component, OnInit } from '@angular/core';
import { Film } from "./movie";
import { HttpClientModule, HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  capiRoot: string = "http://localhost:62272/api/";
  FilmArray:Film[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GETFILM();
  }
  GETFILM(){
    let url = `${this.capiRoot}Film/GetAll`;
    this.http.get(url).subscribe(
    (response: Array<Film>) =>{
      this.FilmArray = response;
  });
    }
}
