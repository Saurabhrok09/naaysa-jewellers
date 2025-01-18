import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Product } from 'src/app/structures/product.structure';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  // products:Product[] = []

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.databaseService.getProducts().then((prods) => {
      prods.forEach((product) => {
        this.products.push({ ...product.data(), id: product.id } as Product);
      })
    })
  }

  products: any[] = [
    {
      name: 'Royal Pink Diamond Ring',
      price: 14325,
      category: 'ring',
      liked: true,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat',
      tag: 'New In',
      metalPurityTypes: [
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
      diamondTypes: [
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
    }
  ]

}
