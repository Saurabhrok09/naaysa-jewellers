import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.scss']
})
export class CustomerReviewComponent {
  customerReview: reviews[] = [
    {
      userImage: "../../../assets/product-review/Ellipse 108.png",
      name: "selena gomez",
      description: "Helpful",
      feedBack: "positive",
      selfReviw: " The product is not exactly the one shown in the images. In the image, the pearls seen as slight off-white colour, big and loose bound on the flower design. But in reality, they are white,smaller and the flower quality is also not good. ",
      productImage: "../../../assets/product-review/product-JR07672-1YP900-db22bd1676287405.jpg.png",
    },
    {
      userImage: "../../../assets/product-review/Ellipse 108.png",
      name: " Elon Musk",
      description: "Helpful",
      feedBack: "positive",
      selfReviw: " The product is not exactly the one shown in the images. In the image, the pearls seen as slight off-white colour, big and loose bound on the flower design. But in reality, they are white,smaller and the flower quality is also not good. ",
      productImage: "../../../assets/product-review/product-JR07672-1YP900-db22bd1676287405.jpg.png",
    },
    {
      userImage: "../../../assets/product-review/Ellipse 108.png",
      name: "Bill Gates",
      description: "Helpful",
      feedBack: "positive",
      selfReviw: " The product is not exactly the one shown in the images. In the image, the pearls seen as slight off-white colour, big and loose bound on the flower design. But in reality, they are white,smaller and the flower quality is also not good. ",
      productImage: "../../../assets/product-review/product-JR07672-1YP900-db22bd1676287405.jpg.png",
    },
    {
      userImage: "../../../assets/product-review/Ellipse 108.png",
      name: "selena gomez",
      description: "Helpful",
      feedBack: "positive",
      selfReviw: " The product is not exactly the one shown in the images. In the image, the pearls seen as slight off-white colour, big and loose bound on the flower design. But in reality, they are white,smaller and the flower quality is also not good. ",
      productImage: "../../../assets/product-review/product-JR07672-1YP900-db22bd1676287405.jpg.png",
    },
    {
      userImage: "../../../assets/product-review/Ellipse 108.png",
      name: "selena gomez",
      description: "Helpful",
      feedBack: "positive",
      selfReviw: " The product is not exactly the one shown in the images. In the image, the pearls seen as slight off-white colour, big and loose bound on the flower design. But in reality, they are white,smaller and the flower quality is also not good. ",
      productImage: "../../../assets/product-review/product-JR07672-1YP900-db22bd1676287405.jpg.png",
    },
  ]
}
export interface reviews {
  userImage: string,
  name: string,
  description: string,
  feedBack: string,
  selfReviw: string,
  productImage: string
}