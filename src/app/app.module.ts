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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    HomeHeaderComponent,
    HomeAboutComponent,
    HomeNumbersComponent,
    HomeEcologyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
