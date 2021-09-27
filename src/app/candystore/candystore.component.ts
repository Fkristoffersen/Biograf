import { Component, OnInit } from '@angular/core';
import { CandyShop } from "./CandyShop";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-candystore',
  templateUrl: './candystore.component.html',
  styleUrls: ['./candystore.component.css']
})
export class CandystoreComponent implements OnInit {
  capiRoot: string = "http://localhost:62272/api/";
  CandyArray:CandyShop[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GET();
  }

  GET(){
    let url = `${this.capiRoot}CandyShop/GetAll`;
    this.http.get(url).subscribe(
    (response: Array<CandyShop>) =>{
      this.CandyArray = response;

  });
}

POST(){
  console.log("POST Method")

  var CustomerID = (document.querySelector("#CustomerID") as HTMLInputElement).value ;
  var OrderID = (document.querySelector("#OrderID") as HTMLInputElement).value ;
  var CandyID = (document.querySelector("#CandyID") as HTMLInputElement).value ;
  var Quantity = (document.querySelector("#Quantity0") as HTMLInputElement).value ;
  var Date = (document.querySelector("#Date") as HTMLInputElement).value ;
  var Total = (document.querySelector("#Total") as HTMLInputElement).value ;
  let url = `${this.capiRoot}ShoppingCart/Post?CustomerID=${CustomerID}&OrderID=${OrderID}&CandyID=${CandyID}&Quantity=${Quantity}&Date=${Date}&Total=${Total}`;
  this.http.get(url).subscribe(
  (response: Array<CandyShop>) =>{
    this.CandyArray = response;
    this.GET();
});
}


}
