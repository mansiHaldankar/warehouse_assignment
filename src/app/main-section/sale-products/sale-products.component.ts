import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sale-products',
  templateUrl: './sale-products.component.html',
  styleUrls: ['./sale-products.component.css']
})
export class SaleProductsComponent implements OnInit {

  saleProducts: any = [{
        "id": 1,
        "name": "Dresses",
        "imgName": "Dresses"
    },
    {
        "id": 2,
        "name": "Shirts",
        "imgName": "Shirts"
    },
    {
        "id": 3,
        "name": "Glasses",
        "imgName": "Glasses"
    },
    {
        "id": 4,
        "name": "Jewels",
        "imgName": "Jewels"
    }
];

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }

}
