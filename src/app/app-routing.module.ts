import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPageComponent } from './Components/buy-page/buy-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginComponent } from './Components/login/login.component';
import { MonitorOrderComponent } from './Components/monitor-order/monitor-order.component';
import { SellPageComponent } from './Components/sell-page/sell-page.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"home", component:HomePageComponent},
  {path:"buy", component:BuyPageComponent},
  {path:"sell", component:SellPageComponent},
  {path:"monitor", component:MonitorOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
