import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  @Input() antalFilm : number = antalFilm();
  
  constructor() { }
  
  ngOnInit(): void {
  }


  
}

function antalFilm(){
  return 3;
}