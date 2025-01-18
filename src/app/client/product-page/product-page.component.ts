import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';
interface Food {
  value: string;
  viewValue: string;
}
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  @Input() jewel_name: string = 'Royal Pink Diamond Ring'
  @Input() src: string = 'ring.png'
  @Input() price: number = 14325
  @Input() liked: boolean = false
  @Input() product_Code: string = '1234HG'
  @Input() height: string = '27.44mm'
  @Input() width: string = '20.44mm'
  @Input() material: string = 'Gold'
  @Input() origin: string = 'Africa'
  @Input() weight: string = '120g'
  @Input() date: string = '14th Jul'
  @Input() pincode: number = 110001
  @Input() large_Image: string = 'assets/topBarImages/jewellery/ring.png'
  @Input() reviewer_Name: string = 'John Doe'
  @Input() text: string = 'Gold Weight Approx 12.4 gram'
  @Input() details_Src: string = 'assets/gold.png'
  @Input() review_Disc: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
  currentImageIndex: number = 0;
  quantity: number = 1;




  hiddenPrice: boolean = false;

  product: any = {

    name: 'Royal Pink Diamond Ring',
    price: 14325,
    description:'Lorem ipsum dolor sit amet consectetur',
    metalPurityTypes:[
      {
        purity: '18K',
      },
      {
        purity: '22K',
      },
      {
        purity: '24K',
      },
    ],
    metalTypes:[
      {
        type: '18KT White Gold' ,
      },
      {
        type:  '18KT Yellow Gold',
      },
      {
        type:  '18KT Rose Gold',
      },
      {
        type:  '15KT Rose Gold',
      },
      {
        type:  '14KT Rose Gold',
      }
    ],
    diamondTypes:[
      {
        name: '22 C',
      },
      {
        name: '24 C',
      },
      {
        name: '26 C',
      },
    ],
    sizeTypes: [
      {
        size: '18',
      },
      {
        size: '20',
      },
      {
        size: '22',
      },
    ],
    images: [
      'assets/topBarImages/earings/ear (1).png',
      'assets/topBarImages/earings/ear (6).png',
      'assets/topBarImages/earings/ear (3).png',
      'assets/topBarImages/earings/ear (4).png',
      'assets/topBarImages/earings/ear (5).png',
    ],
    certifications: [
      {
        name: 'bis',
        image: 'assets/badges/badge (1).png'
      },
      {
        name: 'bis',
        image: 'assets/badges/badge (2).png'
      },
      {
        name: 'bis',
        image: 'assets/badges/badge (3).png'
      },
    ]
  };
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  features = [
    {
      src: 'assets/feature1.png',
      feature_Text: '100% Certified Jewellery'
    },
    {
      src: 'assets/feature2.png',
      feature_Text: '100% Certified Jewellery'
    },
    {
      src: 'assets/feature3.png',
      feature_Text: '100% Certified Jewellery'
    },
    {
      src: 'assets/feature4.png',
      feature_Text: '100% Certified Jewellery'
    },
    {
      src: 'assets/feature4.png',
      feature_Text: '100% Certified Jewellery'
    },
    {
      src: 'assets/feature4.png',
      feature_Text: '100% Certified Jewellery'
    },
    {
      src: 'assets/feature4.png',
      feature_Text: '100% Certified Jewellery'
    },
  ]
  images = [
    'assets/topBarImages/jewellery/ring.png',
    'assets/topBarImages/jewellery/goldRing.svg',
    'assets/topBarImages/jewellery/dimondRing.svg',
    'assets/topBarImages/jewellery/platinum.svg',
    'assets/topBarImages/jewellery/platinum.svg',
    'assets/topBarImages/jewellery/dimondRing.svg',
    'assets/topBarImages/jewellery/dimondRing.svg',
  ]
  reviews = [
    {
      jewel_name: 'Royal Pink Diamond Ring',
      reviewer_Name: 'John Doe',
      review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    },
    {
      jewel_name: 'Royal Pink Diamond Ring',
      reviewer_Name: 'John Doe',
      review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    },
    {
      jewel_name: 'Royal Pink Diamond Ring',
      reviewer_Name: 'John Doe',
      review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    },
    // {
    //   jewel_name:'Royal Pink Diamond Ring',
    //   reviewer_Name: 'John Doe',
    //   review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    // },
    // {
    //   jewel_name:'Royal Pink Diamond Ring',
    //   reviewer_Name: 'John Doe',
    //   review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    // },
    // {
    //   jewel_name:'Royal Pink Diamond Ring',
    //   reviewer_Name: 'John Doe',
    //   review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    // },
    // {
    //   jewel_name:'Royal Pink Diamond Ring',
    //   reviewer_Name: 'John Doe',
    //   review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    // },

  ]
  specificatons = [
    {
      details_Src: 'assets/gold.png',
      material: '18kt Royal Pink Gold',
      text: 'Gold weight (Approx) 2.14 Gram'
    },
    {
      details_Src: 'assets/diamond.png',
      material: '11 SIIJ Diamonds',
      text: 'Diamond weight (Approx) 0.072 Ct'
    },
    {
      details_Src: 'assets/dimension.png',
      material: 'Product Dimension',
      text: '20.12mm X 9.4mm (Height x width)'
    },
    {
      details_Src: 'assets/measure.png',
      material: 'Product Weight (Approx)',
      text: '2.15 Gram'
    },
  ]
  constructor() { }
  onclick() {
    alert('Successfully added to cart')
  }

  addToCart() {
    Notify.success(
      'Product added to cart.',
      {
        zindex: 99999
      }
    );
    let currentCart = localStorage.getItem('cart');
    if (currentCart) {
      let cart = JSON.parse(currentCart);
      cart.push(this.product);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let cart = [];
      cart.push(this.product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }

  }

  // hidePrice(){
  //   this.Price=!this.Price;
  // }
  ngOnInit(): void {

    AOS.init();
  }

}

