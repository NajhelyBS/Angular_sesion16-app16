import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BreakComponent } from './break/break.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    BreakComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
