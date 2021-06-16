import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-time',
  templateUrl: './choose-time.component.html',
  styleUrls: ['./choose-time.component.css']
})
export class ChooseTimeComponent implements OnInit {

  title = "THE EVIL DEAD";
  spilletid = "190 min."

  constructor() { }

  ngOnInit(): void {
  }

}
