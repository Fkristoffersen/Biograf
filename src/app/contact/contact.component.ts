import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Msg } from "./Msg";
import { CandyShop,MessageClass } from "./CandyShop";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']

})
export class ContactComponent implements OnInit {

  capiRoot: string = "http://localhost:62272/api/";
  msg : Msg[]=[];
  CandyArray:CandyShop[]=[];
  MessageArray:MessageClass[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  POST(){
    console.log("POST Method")
    var Fname = (document.querySelector("#Fname") as HTMLInputElement).value ;
    var Ename = (document.querySelector("#Ename") as HTMLInputElement).value ;
    var Email = (document.querySelector("#Mail") as HTMLInputElement).value ;
    var Msg = (document.querySelector("#Msg") as HTMLInputElement).value ;
    let url = `${this.capiRoot}Message/Create?Firstname=${Fname}&Lastname=${Ename}&Email=${Email}&Msg=${Msg}`;
    this.http.get(url).subscribe(
      (response: Array<Msg>) =>{
        this.msg = response;

    });
  };

}
