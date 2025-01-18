import { Component } from '@angular/core';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent {
  customerReview: reviews[] = [
    {
      userImage: "../../../assets/product-review/Ellipse 108.png",
      name: "Anjali Satpathi",
      description: "Helpful",
      feedBack: "positive",
      selfReviw: " The product is not exactly the one shown in the images. In the image, the pearls seen as slight off-white colour, big and loose bound on the flower design. But in reality, they are white,smaller and the flower quality is also not good. ",
      productImage: "../../../assets/product-review/product-JR07672-1YP900-db22bd1676287405.jpg.png",
    },
    {
      userImage: "../../../assets/product-review/Ellipse 108.png",
      name: "Anjali Satpathi",
      description: "Helpful",
      feedBack: "positive",
      selfReviw: " The product is not exactly the one shown in the images. In the image, the pearls seen as slight off-white colour, big and loose bound on the flower design. But in reality, they are white,smaller and the flower quality is also not good. ",
      productImage: "../../../assets/product-review/product-JR07672-1YP900-db22bd1676287405.jpg.png",
    },
    {
      userImage: "../../../assets/product-review/Ellipse 108.png",
      name: "Anjali Satpathi",
      description: "Helpful",
      feedBack: "positive",
      selfReviw: " The product is not exactly the one shown in the images. In the image, the pearls seen as slight off-white colour, big and loose bound on the flower design. But in reality, they are white,smaller and the flower quality is also not good. ",
      productImage: "../../../assets/product-review/product-JR07672-1YP900-db22bd1676287405.jpg.png",
    },
    {
      userImage: "../../../assets/product-review/Ellipse 108.png",
      name: "Anjali Satpathi",
      description: "Helpful",
      feedBack: "positive",
      selfReviw: " The product is not exactly the one shown in the images. In the image, the pearls seen as slight off-white colour, big and loose bound on the flower design. But in reality, they are white,smaller and the flower quality is also not good. ",
      productImage: "../../../assets/product-review/product-JR07672-1YP900-db22bd1676287405.jpg.png",
    },
    {
      userImage: "../../../assets/product-review/Ellipse 108.png",
      name: "Anjali Satpathi",
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
