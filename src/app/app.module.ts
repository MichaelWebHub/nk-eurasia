import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeNumbersComponent } from './home/home-numbers/home-numbers.component';
import { HomeEcologyComponent } from './home/home-ecology/home-ecology.component';
import { FooterComponent } from './footer/footer.component';
import { HomePartnersComponent } from './home/home-partners/home-partners.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { DocumentsComponent } from './documents/documents.component';
import { ContactsComponent } from './contacts/contacts.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SwiperModule} from 'ngx-swiper-wrapper';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    HomeHeaderComponent,
    HomeAboutComponent,
    HomeNumbersComponent,
    HomeEcologyComponent,
    FooterComponent,
    HomePartnersComponent,
    ProductsComponent,
    ServicesComponent,
    DocumentsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
