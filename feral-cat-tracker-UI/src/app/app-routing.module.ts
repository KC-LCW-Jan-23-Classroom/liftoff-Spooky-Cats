import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {ContactComponent} from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LogcatComponent } from './logcat/logcat.component';
import { FindcatComponent } from './findcat/findcat.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CatProfilePageComponent } from './cat-profile-page/cat-profile-page.component';
import { UpdateCatProfilePageComponent } from './update-cat-profile-page/update-cat-profile-page.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },  
  {
    path:'login', 
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'log',
    component:LogcatComponent, 
  },
  {
    path: 'find',
    component:FindcatComponent
  },
  {
    path: 'results',
    component:SearchResultsComponent
  },
  {
    path: 'catProfile',
    component:CatProfilePageComponent
  },
  { path: 'updateCat',
  component:UpdateCatProfilePageComponent},
  {path: 'map',
  component:MapComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
