import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css']
})
export class LatestProductsComponent implements OnInit {

  constructor() { }

  latestProducts: any = [{
    "brand": "NIKE",
    "productName": "Moodo Solic Coral Packet Top",
    "amount" : "142",
    "imgName" : "Latest_Product_1"
},
{
  "brand": "TOMY HILFIGER",
  "productName": "Bestelle Closed Top lace Black Boots",
  "amount" : "149",
  "discountValue" : "79",
  "imgName" : "Latest_Product_2"
},
{
  "brand": "MICHAEL KORSS",
  "productName": "Solid Navy White Comma Top",
  "amount" : "215",
  "imgName" : "Latest_Product_3"
},
{
  "brand": "LOUIS VOUITTON",
  "productName": "Solid Navy White Stripped Dotted",
  "amount" : "411",
  "imgName" : "Latest_Product_4"
}
];
  ngOnInit(): void {
  }

}
