import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brands: any = [{
    "id": 1,
    "brandName": "BOSS"
},
{
    "id": 2,
    "brandName": "VERSACE"
},
{
    "id": 3,
    "brandName": "RALPH"
},
{
    "id": 4,
    "brandName": "CHANEL"
},
{
    "id": 5,
    "brandName": "BURBERRY"
},
{
    "id": 6,
    "brandName": "Kate_Spade"
},
{
    "id": 7,
    "brandName": "GUCCI"
}
];
  constructor() { }

  ngOnInit(): void {
  }

}
