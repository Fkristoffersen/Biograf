import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Signups } from "./Signup";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient) { }
  capiRoot: string = "http://localhost:62272/api/";
  SignupArray:Signups[]=[];
  ngOnInit(): void {}

  POST(){
    console.log("POST Method")
    var firstname = (document.querySelector("#Firstname") as HTMLInputElement).value ;
    var lastname = (document.querySelector("#Lastname") as HTMLInputElement).value ;
    var email = (document.querySelector("#Email") as HTMLInputElement).value ;
    var address = (document.querySelector("#Address") as HTMLInputElement).value ;
    var zipcode = (document.querySelector("#Zipcode") as HTMLInputElement).value ;
    var password = (document.querySelector("#Password") as HTMLInputElement).value ;
    let url = `${this.capiRoot}customer/create?Firstname=${firstname}&Lastname=${lastname}&Email=${email}&Address=${address}&Zipcode=${zipcode}&Password=${password}`;
    this.http.get(url).subscribe(
    (response: Array<Signups>) =>{
      this.SignupArray = response;
      alert('Bruger oprettet');

    });

  }
}
