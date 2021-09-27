import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { CartObj } from "./ShoppingCart";
import { CandyShop } from '../CandyShop';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 capiRoot: string = "http://localhost:62272/api/";
  CandyArray:CandyShop []=[]
  ShoppingArray:CartObj []=[]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  GETWHERE(){
    var inpData = (document.querySelector("#CustomerID") as HTMLInputElement).value ;
    let url = `${this.capiRoot}ShoppingCart/GetCustomerID?id=`+inpData;
    this.http.get(url).subscribe(
    (response: Array<CartObj>) =>{
      this.ShoppingArray = response;
  });
}
}
