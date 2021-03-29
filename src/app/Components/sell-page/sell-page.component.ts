import { Component, OnInit } from '@angular/core';

interface Product {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sell-page',
  templateUrl: './sell-page.component.html',
  styleUrls: ['./sell-page.component.css']
})
export class SellPageComponent implements OnInit {

  firstName:String = "chester Test";
  lastName:String = "user surname";
  email:String = "user@email.com";
  balance:number = 100;
  Currency:String = "$";
  lastTraded:String ="apple stocks at 20 dollars per share";

  productName:String = "enter your product name";
  quantity:number = 0;
  price:number = 12.3;
  side: boolean = true;

  selectedValue: string = "";

  products: Product[] = [
    {value: 'IBM-0', viewValue: 'IBM'},
    {value: 'Apple-1', viewValue: 'APPL'},
    {value: 'Windows-2', viewValue: 'WIN'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  somet(){}

}
