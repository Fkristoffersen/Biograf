import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-day',
  templateUrl: './choose-day.component.html',
  styleUrls: ['./choose-day.component.css'],
})
export class ChooseDayComponent implements OnInit {
  dag = "Wednesday"
  dato = "17-17-21"


  constructor() { }

  ngOnInit(): void {

  }
}
