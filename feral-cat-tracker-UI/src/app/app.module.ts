import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    NavbarComponent,
    FooterbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
