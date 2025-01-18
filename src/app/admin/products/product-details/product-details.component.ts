import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
   }

  ngOnInit(): void {

    const bookingsGraph = document.getElementById(
      'line'
    ) as HTMLCanvasElement;
    if (bookingsGraph) {
      const lineChart = new Chart(bookingsGraph, {
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
              data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80],
              borderColor: '#ee93a3',
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
  }

}
