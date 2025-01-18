import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
import * as AOS from 'aos'

declare var VanillaTilt: any;

Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  // liked: boolean = false
  panelOpenState = false;
  isLoaded: boolean = false;

  t1 = false
  card = [
    {
      image: "../../../assets/home/Image5.jpg.png",
      h1: "Modern Jwellery",
      p: "Modern jewellery is a movement in jewellery design  that favours high personalisationand detachment of designing from its stature as a specialised job",
      button: "Necklace",
      read_more: false,

    },

    {
      image: "../../../assets/home/Image4.jpg.png",
      h1: "Modern Jwellery",
      p: "Modern jewellery is a movement in jewellery design  that favours high personalisationand detachment of designing from its stature as a specialised job",
      button: "Necklace",
      read_more: false,
    },

    {
      image: "../../../assets/home/Image4.jpg.png",
      h1: "Modern Jwellery",
      p: "Modern jewellery is a movement in jewellery design  that favours high personalisationand detachment of designing from its stature as a specialised job",
      button: "Necklace",
      read_more: false,
    },
  ]


  histories = [
    {
      lable: "New In",
      image: "../../../assets/home/511056FCDAA00.jpg.png",
      h1: "Sublimed By Flora gold Rings",
      p: 12267,
      like: "../../../assets/home/likedWishlist.svg",
      dislike: "../../../assets/home/unlikedWishlist.svg",
      liked: false,
    },
    {
      lable: "New In",
      image: "../../../assets/home/unsplash_-nKCbZlOHek.png",
      h1: "Sublimed By Flora gold Rings",
      p: 12267,
      like: "../../../assets/home/likedWishlist.svg",
      dislike: "../../../assets/home/unlikedWishlist.svg",
      liked: false,
    },
    {
      lable: "New In",
      image: "../../../assets/home/unsplash_fVeujn3i5ZE.png",
      h1: "Sublimed By Flora gold Rings",
      p: 12267,
      like: "../../../assets/home/likedWishlist.svg",
      dislike: "../../../assets/home/unlikedWishlist.svg",
      liked: false,
    },
    {
      lable: "New In",
      image: "../../../assets/home/511056FCDAA00.jpg.png",
      h1: "Sublimed By Flora gold Rings",
      p: 12267,
      like: "../../../assets/home/likedWishlist.svg",
      dislike: "../../../assets/home/unlikedWishlist.svg",
      liked: false,

    },
    {
      lable: "New In",
      image: "../../../assets/home/unsplash_fVeujn3i5ZE.png",
      h1: "Sublimed By Flora gold Rings",
      p: 12267,
      like: "../../../assets/home/likedWishlist.svg",
      dislike: "../../../assets/home/unlikedWishlist.svg",
      liked: false,
    },
    {
      lable: "New In",
      image: "../../../assets/home/unsplash_-nKCbZlOHek.png",
      h1: "Sublimed By Flora gold Rings",
      p: 12267,
      like: "../../../assets/home/likedWishlist.svg",
      dislike: "../../../assets/home/unlikedWishlist.svg",
      liked: false,
    },
  ]

  blog = [
    {
      image: "../../../assets/home/Rectangle 928.png",
      h1: "Excellent Product",
      name: "Amrita Sing",
      Comment: " “I got this necklace as my wedding gift and instantly loved it. It is literally the only accessory I wore on my entire honeymoon. I love how delicate and beautiful it is.”",
    },
    {
      image: "../../../assets/home/Rectangle 928.png",
      h1: "Excellent Product",
      name: "Amrita Sing",
      Comment: " “I got this necklace as my wedding gift and instantly loved it. It is literally the only accessory I wore on my entire honeymoon. I love how delicate and beautiful it is.”",
    },
    {
      image: "../../../assets/home/Rectangle 928.png",
      h1: "Excellent Product",
      name: "Amrita Sing",
      Comment: " “I got this necklace as my wedding gift and instantly loved it. It is literally the only accessory I wore on my entire honeymoon. I love how delicate and beautiful it is.”",
    },
  ]




  public swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  constructor() { }

  ngOnInit(): void {
    AOS.init();
    console.log(VanillaTilt.init());

  }
}
