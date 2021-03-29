import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './Components/login/login.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import { BuyPageComponent } from './Components/buy-page/buy-page.component';
import { SellPageComponent } from './Components/sell-page/sell-page.component';
import { MonitorOrderComponent } from './Components/monitor-order/monitor-order.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomePageComponent } from './Components/home-page/home-page.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { BuyServiceService } from './Services/buy-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuyPageComponent,
    SellPageComponent,
    MonitorOrderComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule
  ],

  providers: [BuyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
