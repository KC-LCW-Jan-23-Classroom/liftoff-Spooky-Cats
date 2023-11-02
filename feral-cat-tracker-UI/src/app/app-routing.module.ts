import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {ContactComponent} from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LogcatComponent } from './logcat/logcat.component';
import { FindcatComponent } from './findcat/findcat.component';

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
    component:LogcatComponent
  },
  {
    path: 'find',
    component:FindcatComponent
  }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
