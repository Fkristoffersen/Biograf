import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { SharedService } from "./shared.service";
import { map } from 'rxjs/operators';
import { CandyShop } from "./CandyShop";



@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})

export class AddEditComponent implements OnInit {
  totalAngularPackages;
  capiRoot: string = "http://localhost:62272/api/CandyShop";
  CandyArray:CandyShop[]=[];

  constructor(private http: HttpClient) { }


  GET(){
  let url = `${this.capiRoot}/SelectAll`;
  this.http.get(url).subscribe(
  (response: Array<CandyShop>) =>{
    this.CandyArray = response;
});
  }

  GETWHERE(){
    console.log("Get Method")
     var inpData = (document.querySelector(".testinput") as HTMLInputElement).value ;
    let url = `${this.capiRoot}/SelectSingle?id=`+inpData;
    this.http.get(url).subscribe(
    (response: Array<CandyShop>) =>{
      this.CandyArray = response;
  });


  }
  POST(){
    console.log("POST Method")
    var Name = (document.querySelector("#Name") as HTMLInputElement).value ;
    var Price = (document.querySelector("#Price") as HTMLInputElement).value ;
    var Size = (document.querySelector("#Size") as HTMLInputElement).value ;
    let url = `${this.capiRoot}/Create?Name=${Name}&Price=${Price}&Size=${Size}`;
    this.http.get(url).subscribe(
    (response: Array<CandyShop>) =>{
      this.CandyArray = response;
      this.GET();
  });


  }

  DELETE(){
    console.log("DELETE Method")
    var inpData = (document.querySelector(".testinput") as HTMLInputElement).value ;
    // var OutData = (document.getElementById("demo") as HTMLElement).innerHTML = inpData;
     let url = `${this.capiRoot}/Delete?id=` + inpData;
    this.http.get(url).subscribe(res => console.log(res));
    console.log(inpData);
    this.GET();

    }

    PUT(){
    console.log("UPDATE Method")
    var ID = (document.querySelector(".testinput") as HTMLInputElement).value ;
    var Name = (document.querySelector("#Name") as HTMLInputElement).value ;
    var Price = (document.querySelector("#Price") as HTMLInputElement).value ;
    var Size = (document.querySelector("#Size") as HTMLInputElement).value ;
    let url = `${this.capiRoot}/Update?CandyID=${ID}&Name=${Name}&Size=${Size}&Price=${Price}`;
    this.http.get(url).subscribe(
    (response: Array<CandyShop>) =>{
      this.CandyArray = response;
  });
  this.GET();
  }


  ngOnInit() {
    this.GET();

  }
}

//SELECT ALL VIRKER!!!! LIG DET IND I NGONINIT
// this.http.get("http://localhost:62272/api/CandyShop/SelectAll").subscribe(
//   (response: Array<CandyShop>) =>{
//     this.CandyArray = response;
//   });
