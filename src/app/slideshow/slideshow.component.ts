import { Component, OnInit } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
// import { Slider } from 'mock';

import {imageObject} from '../mock-slideshow'

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})



export class SlideshowComponent implements OnInit {
  imageObject = imageObject;

//   imageObject: Array<object> = [{
//     image: 'assets/Image/infinitywar.png',
//     thumbImage: 'assets/Image/infinitywar.png',
//     alt: 'Infinity war',
//     title: 'Avengers: Infinity war'
// }, {
//     image: 'assets/Image/evildead.png', // Support base64 image
//     thumbImage: 'assets/Image/evildead.png', // Support base64 image
//     title: 'The Evil Dead', //Optional: You can use this key if want to show image with title
//     alt: 'Evil Dead', //Optional: You can use this key if want to show image with alt
//     order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
// },
// {
//   image: 'assets/Image/startrek.png', // Support base64 image
//   thumbImage: 'assets/Image/startrek.png', // Support base64 image
//   title: 'Startrek',
//   alt: 'Startrek', 
// },
// {
//   image: 'assets/Image/Tanhaji.png', // Support base64 image
//   thumbImage: 'assets/Image/Tanhaji.png', // Support base64 image
//   title: 'Tanhaji',
//   alt: 'Tanhaji', 
// },
// ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
