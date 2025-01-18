import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() orders: number = 1234
  @Input() product_Name: string = 'Product'
  @Input() product_Id: string = '12345678912'
  @Input() sold_Number: number = 14
  @Input() returned_Number: number = 14
  @Input() material: string = 'Diamond'
  @Input() weight: string = '5.56 grams'
  @Input() price: string = '₹30,000'
  @Input() src: string = 'assets/'

  items = [
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      sold_Number: 14,
      returned_Number: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      price: '₹30,000',
      src: 'assets/'
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      sold_Number: 14,
      returned_Number: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      price: '₹30,000',
      src: 'assets/'
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      sold_Number: 14,
      returned_Number: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      price: '₹30,000',
      src: 'assets/'
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      sold_Number: 14,
      returned_Number: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      price: '₹30,000',
      src: 'assets/'
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      sold_Number: 14,
      returned_Number: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      price: '₹30,000',
      src: 'assets/'
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      sold_Number: 14,
      returned_Number: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      price: '₹30,000',
      src: 'assets/'
    },
  ]
  features = [
    {
      feature_Name: 'Add Product'
    },
    {
      feature_Name: 'Add Vendor'
    },
    {
      feature_Name: 'Category'
    },
    {
      feature_Name: 'Add Vendor'
    },
  ]
  mobile_widgets = [
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      product_price: '₹30,000',
      sold: 14,
      return: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      src: 'assets/2.jpeg',
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      product_price: '₹30,000',
      sold: 14,
      return: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      src: 'assets/2.jpeg',
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      product_price: '₹30,000',
      sold: 14,
      return: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      src: 'assets/2.jpeg',
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      product_price: '₹30,000',
      sold: 14,
      return: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      src: 'assets/2.jpeg',
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      product_price: '₹30,000',
      sold: 14,
      return: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      src: 'assets/2.jpeg',
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      product_price: '₹30,000',
      sold: 14,
      return: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      src: 'assets/2.jpeg',
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      product_price: '₹30,000',
      sold: 14,
      return: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      src: 'assets/2.jpeg',
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      product_price: '₹30,000',
      sold: 14,
      return: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      src: 'assets/2.jpeg',
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      product_price: '₹30,000',
      sold: 14,
      return: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      src: 'assets/2.jpeg',
    },
  ]
  constructor() {
    Chart.register(...registerables);
  }


  ngOnInit(): void {
    const lineChart = document.getElementById(
      'line'
    ) as HTMLCanvasElement;
    if (lineChart) {
      const Charts = new Chart(lineChart, {
        type: 'line',
        data: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',

          ],
          datasets: [
            {
              label: '',
              data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
              borderColor: '#E88F9F',
              tension: 0.2,
            },

          ],
        },
        options: {
          
          maintainAspectRatio: false,
          plugins:{
            legend: {
             display: false
            }
           },
          scales: {
               x: {
                  grid: {
                     display: false
                  }
               },
               y: {
                  grid: {
                     display: false
                  }
               }
          }
       }  
      });
    }
    const doughnutChart = document.getElementById(
      'doughnut'
    ) as HTMLCanvasElement;
    if (lineChart) {
      const Charts = new Chart(doughnutChart, {
        type: 'doughnut',
        data: {
          labels: [
            'Necklace',
            'Rings',
            'Earings',
            'Bracelets',
            'Ornaments',
            'Utensils'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [30, 50, 10, 20, 30, 40],
            backgroundColor: [
              '#E88F9F',
              '#27B9E7',
              '#FFAA5B',
              '#00D35A',
              '#FB889C',
              '#FFD56A',
            ],
            hoverOffset: 4
          }]
        },
        options: {
          maintainAspectRatio: false,

          scales: {
            y: {
              display: false // Hide Y axis labels
            },
            x: {
              display: false // Hide X axis labels
            }
          }
        }
      });
    }
  }

}

