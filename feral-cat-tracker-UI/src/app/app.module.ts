import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent} from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from  '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask} from 'ngx-mask';
import { LogcatComponent } from './logcat/logcat.component';
import { MatButtonModule } from '@angular/material/button';  
import { MatTooltipModule } from '@angular/material/tooltip';
import { FindcatComponent } from './findcat/findcat.component';
import { CatCardUiComponent } from './cat-card-ui/cat-card-ui.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    NavbarComponent,
    FooterbarComponent,
    LoginComponent,
    ContactComponent,
    HomeComponent,
    RegisterComponent,
    LogcatComponent,
    FindcatComponent,
    CatCardUiComponent,
    SearchFormComponent,
    SearchResultsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    MatButtonModule,
    MatTooltipModule

  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
