import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  slides = [
    {
      img: '../assets/image/ai-capablities-min.jpg',
      caption: 'Our AI Capabilities to Your Advantage'
    },
    {
      img: '../assets/image/ai-capablities-min.jpg',
      caption: "With Agile, code is published,released and subsequently reviewed by clients every week so there's no fear of running into unexpected risks."
    },
    {
      img: '../assets/image/ai-capablities-min.jpg',
      caption: 'Collaborative development keeps clients apprised each and every step of the process.'
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
