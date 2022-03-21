import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import{sellcropService} from 'src/Service/sellcrop.service';
import { SellcropComponent } from './sellcrop/sellcrop.component';
import { FarmerPageComponent } from './farmer-page/farmer-page.component';
import { FormsModule } from '@angular/forms';
import { SoldhistoryComponent } from './soldhistory/soldhistory.component';
import { SoldHistorySevice } from 'src/Service/soldhistory.service';
import { MarketViewComponent } from './market-view/market-view.component';
@NgModule({
  declarations: [
    AppComponent,
    SellcropComponent,
    FarmerPageComponent,
    SoldhistoryComponent,
    MarketViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [sellcropService,SoldHistorySevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
