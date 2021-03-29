import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  showFiller = false;
  firstName:String = "chester Test";
  lastName:String = "user surname";
  email:String = "user@email.com";
  balance:number = 100;
  Currency:String = "$";
  lastTraded:String ="apple stocks at 20 dollars per share";


  constructor() { }

  ngOnInit(): void {
  }


}



