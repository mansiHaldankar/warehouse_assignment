import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarSectionComponent } from './header/navbar-section/navbar-section.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { FeatureCarouselSectionComponent } from './main-section/feature-carousel-section/feature-carousel-section.component';
import { SaleProductsComponent } from './main-section/sale-products/sale-products.component';
import { LatestProductsComponent } from './main-section/latest-products/latest-products.component';
import { SummerSpecialSaleComponent } from './main-section/summer-special-sale/summer-special-sale.component';
import { BestProductsComponent } from './main-section/best-products/best-products.component';
import { BrandsComponent } from './main-section/brands/brands.component';
import { InfoSecComponent } from './main-section/info-sec/info-sec.component';
import { NewsLetterComponent } from './main-section/news-letter/news-letter.component';
import { SocialSectionComponent } from './main-section/social-section/social-section.component';
import { FooterComponent } from './footer/footer.component';
import { AddressSecComponent } from './footer/address-sec/address-sec.component';
import { PoliciesSecComponent } from './footer/policies-sec/policies-sec.component';
import { CustomerServiceSecComponent } from './footer/customer-service-sec/customer-service-sec.component';
import { SocialMediaSecComponent } from './footer/social-media-sec/social-media-sec.component';
import { AboutUsSecComponent } from './footer/about-us-sec/about-us-sec.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarSectionComponent,
    MainSectionComponent,
    FeatureCarouselSectionComponent,
    SaleProductsComponent,
    LatestProductsComponent,
    SummerSpecialSaleComponent,
    BestProductsComponent,
    BrandsComponent,
    InfoSecComponent,
    NewsLetterComponent,
    SocialSectionComponent,
    FooterComponent,
    AddressSecComponent,
    PoliciesSecComponent,
    CustomerServiceSecComponent,
    SocialMediaSecComponent,
    AboutUsSecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
