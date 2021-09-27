import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { CandyShop,Film,Customer} from "./CandyShop";

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})

export class AddEditComponent implements OnInit {
  totalAngularPackages;
  capiRoot: string = "http://localhost:62272/api/";
  CandyArray:CandyShop[]=[];
  FilmArray:Film[]=[];
  CustomerArray:Customer[]=[];

  constructor(private http: HttpClient) { }

//CANDYSHOP
  GET(){
  let url = `${this.capiRoot}CandyShop/GetAll`;
  this.http.get(url).subscribe(
  (response: Array<CandyShop>) =>{
    this.CandyArray = response;
});

  }

  GETWHERE(){
    console.log("Get Method")
     var inpData = (document.querySelector(".testinput") as HTMLInputElement).value ;
    let url = `${this.capiRoot}CandyShop/GetSingle?id=`+inpData;
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
    var Picture = (document.querySelector("#Picture") as HTMLInputElement).value ;
    let url = `${this.capiRoot}CandyShop/Post?Name=${Name}&Price=${Price}&Size=${Size}&Picture=${Picture}`;
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
     let url = `${this.capiRoot}CandyShop/Delete?id=` + inpData;
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
  var Picture = (document.querySelector("#Picture") as HTMLInputElement).value ;
  let url = `${this.capiRoot}CandyShop/Put?CandyID=${ID}&Name=${Name}&Size=${Size}&Price=${Price}&Picture=${Picture}`;
  this.http.get(url).subscribe(
  (response: Array<CandyShop>) =>{
    this.CandyArray = response;
  });
  this.GET();
  }


  ngOnInit() {
    this.GET();

  }
    //FILM
  GETFILM(){
    let url = `${this.capiRoot}Film/GetAll`;
    this.http.get(url).subscribe(
    (response: Array<Film>) =>{
      this.FilmArray = response;
  });
    }

    GETWHEREFILM(){
      console.log("Get Method")
       var inpData = (document.querySelector(".testinputfilm") as HTMLInputElement).value ;
      let url = `${this.capiRoot}Film/GetSingle?id=`+inpData;
      this.http.get(url).subscribe(
      (response: Array<Film>) =>{ //Henter Film Class fra Candyshop.ts
        this.FilmArray = response;
    });


    }
    POSTFILM(){
      console.log("POST Method")
      var Titel = (document.querySelector("#Titel") as HTMLInputElement).value ;
      var RunTime = (document.querySelector("#RunTime") as HTMLInputElement).value ;
      var StartDate = (document.querySelector("#StartDate") as HTMLInputElement).value ;
      var EndDate = (document.querySelector("#EndDate") as HTMLInputElement).value ;
      var Picturef = (document.querySelector("#PictureF") as HTMLInputElement).value ;
      let url = `${this.capiRoot}Film/Post?Titel=${Titel}&RunTime=${RunTime}&StartDate=${StartDate}&EndDate=${EndDate}&Picture=${Picturef}`;
      this.http.get(url).subscribe(
      (response: Array<Film>) =>{
        this.FilmArray = response;

    });
    }

    DELETEFILM(){
      console.log("DELETE Method")
      var inpData = (document.querySelector(".testinputfilm") as HTMLInputElement).value ;
      // var OutData = (document.getElementById("demo") as HTMLElement).innerHTML = inpData;
       let url = `${this.capiRoot}Film/Delete?FilmID=` + inpData;
      this.http.get(url).subscribe(res => console.log(res));
      console.log(inpData);
      this.GETFILM();

      }

      PUTFILM(){
      console.log("UPDATE Method")
      var FilmID = (document.querySelector(".testinputfilm") as HTMLInputElement).value ;
      var Titel = (document.querySelector("#Titel") as HTMLInputElement).value ;
      var RunTime = (document.querySelector("#RunTime") as HTMLInputElement).value ;
      var StartDate = (document.querySelector("#StartDate") as HTMLInputElement).value ;
      var EndDate = (document.querySelector("#EndDate") as HTMLInputElement).value ;
      var Picturef = (document.querySelector("#PictureF") as HTMLInputElement).value ;
      let url = `${this.capiRoot}Film/Put?FilmID=${FilmID}&Titel=${Titel}&RunTime=${RunTime}&StartDate=${StartDate}&EndDate=${EndDate}&Picture=${Picturef}`;
      this.http.get(url).subscribe(
      (response: Array<Film>) =>{
        this.FilmArray = response;
    });
    this.GETFILM();
    }



    //CUSTOMER
  GETCUSTOMER(){
    let url = `${this.capiRoot}customer/get`;
    this.http.get(url).subscribe(
    (response: Array<Customer>) =>{
      this.CustomerArray = response;
  });
    }

    GETWHERECUSTOMER(){
      console.log("Get Method")
       var inpData = (document.querySelector(".testinputcustomer") as HTMLInputElement).value ;
      let url = `${this.capiRoot}customer/get?id=`+inpData;
      this.http.get(url).subscribe(
      (response: Array<Customer>) =>{ //Henter Film Class fra Candyshop.ts
        this.CustomerArray = response;
    });
    }

    POSTCUSTOMER(){
      console.log("POST Method")
      var Titel = (document.querySelector("#Titel") as HTMLInputElement).value ;
      var RunTime = (document.querySelector("#RunTime") as HTMLInputElement).value ;
      var StartDate = (document.querySelector("#StartDate") as HTMLInputElement).value ;
      var EndDate = (document.querySelector("#EndDate") as HTMLInputElement).value ;
      var Picturef = (document.querySelector("#PictureF") as HTMLInputElement).value ;
      let url = `${this.capiRoot}Film/Post?Titel=${Titel}&RunTime=${RunTime}&StartDate=${StartDate}&EndDate=${EndDate}&Picture=${Picturef}`;
      this.http.get(url).subscribe(
      (response: Array<Film>) =>{
        this.FilmArray = response;

    });
    }

    DELETECUSTOMER(){
      console.log("DELETE Method")
      var inpData = (document.querySelector(".testinputfilm") as HTMLInputElement).value ;
      // var OutData = (document.getElementById("demo") as HTMLElement).innerHTML = inpData;
       let url = `${this.capiRoot}Film/Delete?FilmID=` + inpData;
      this.http.get(url).subscribe(res => console.log(res));
      console.log(inpData);
      this.GETCUSTOMER();

      }

      PUTCUSTOMER(){
      console.log("UPDATE Method")
      var FilmID = (document.querySelector(".testinputfilm") as HTMLInputElement).value ;
      var Titel = (document.querySelector("#Titel") as HTMLInputElement).value ;
      var RunTime = (document.querySelector("#RunTime") as HTMLInputElement).value ;
      var StartDate = (document.querySelector("#StartDate") as HTMLInputElement).value ;
      var EndDate = (document.querySelector("#EndDate") as HTMLInputElement).value ;
      var Picturef = (document.querySelector("#PictureF") as HTMLInputElement).value ;
      let url = `${this.capiRoot}Film/Put?FilmID=${FilmID}&Titel=${Titel}&RunTime=${RunTime}&StartDate=${StartDate}&EndDate=${EndDate}&Picture=${Picturef}`;
      this.http.get(url).subscribe(
      (response: Array<Film>) =>{
        this.FilmArray = response;
    });
    this.GETCUSTOMER();
    }





}

//SELECT ALL VIRKER!!!! LIG DET IND I NGONINIT
// this.http.get("http://localhost:62272/api/CandyShop/SelectAll").subscribe(
//   (response: Array<CandyShop>) =>{
//     this.CandyArray = response;
//   });

