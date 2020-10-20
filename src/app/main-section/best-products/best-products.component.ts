import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-products',
  templateUrl: './best-products.component.html',
  styleUrls: ['./best-products.component.css']
})
export class BestProductsComponent implements OnInit {

  latestProducts: any = [{
    "brand": "JACK WOFLSKIN",
    "productName": "White ShortQuarter Sleeve Top",
    "amount" : "175",
    "imgName" : "Jack"
},
{
  "brand": "NORTHFACE",
  "productName": "Moodo Solid Pink Printed Short Sleeve Top",
  "amount" : "149",
  "imgName" : "Northface_pink"
},
{
  "brand": "ADIDAS",
  "productName": "White Goldie zipped Pocket Top",
  "amount" : "300",
  "imgName" : "Adidas"
},
{
  "brand": "LEVI'S",
  "productName": "White Black Text Short Sleeve Top",
  "amount" : "203",
  "imgName" : "Levi_White"
},
{
  "brand": "JACK WOFLSKIN",
  "productName": "Stripped Dotted Pocket Short Sleeve Top",
  "amount" : "135",
  "imgName" : "Jack_stripped"
},
{
"brand": "NORTHFACE",
"productName": "White Black Polka Dot Short Sleeve",
"amount" : "149",
"discountValue" : "79",
"imgName" : "Northface_black"
},
{
"brand": "ADIDAS",
"productName": "Gray Melange Vneck Short Sleeve Top",
"amount" : "650",
"imgName" : "Adidas_grey"
},
{
"brand": "LEVI'S",
"productName": "Dark Blue Puma WMS Jamaica Fun Tee",
"amount" : "41",
"imgName" : "Levi_blue"
}
];
  constructor() { }

  ngOnInit(): void {
  }

}
