import { Component, OnInit } from '@angular/core';
import { BuyServiceService } from 'src/app/Services/buy-service.service';



interface Product {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})



export class BuyPageComponent  {

  showFiller = false;
  productName:String = "enter your product name";
  quantity:number = 0;
  price:number = 12.3;
  side: boolean = true;
  balance:number = 100;
  Currency:String = "$";


  selectedValue: string = "";
  //selectedCar: string = "";

  products: Product[] = [
    {value: 'IBM-0', viewValue: 'IBM'},
    {value: 'Apple-1', viewValue: 'APPL'},
    {value: 'Windows-2', viewValue: 'WIN'}
  ];

  constructor(private buyService:BuyServiceService) { }

  ngOnInit(): void {
  }

  somet(){
    this.buyService.alertSomething()
  }
}

