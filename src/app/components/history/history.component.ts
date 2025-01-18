import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  isLoaded: boolean = false;
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
}
