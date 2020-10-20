import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-sec',
  templateUrl: './info-sec.component.html',
  styleUrls: ['./info-sec.component.css']
})
export class InfoSecComponent implements OnInit {
  actionItems = [
    {
      "action" : "Refer a friend",
      "actionDescription": "For each friend you reffer to our shop, you'll receive 20% off.",
      "actionImg" : "Refer",
    },
    {
      "action" : "Loyality Program",
      "actionDescription": "For each purchase you earn points for every AED spent here.",
      "actionImg" : "Loyality",
    },
    {
      "action" : "Free Sheeping",
      "actionDescription": "Free shipping on all orders, no minimum on purchase or items",
      "actionImg" : "Shipping",
    },
    {
      "action" : "Return Guarantee",
      "actionDescription": "Return Guarantee for the items within 7 days of purchasing",
      "actionImg" : "Return",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
