// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Add BrowserModule
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ContactComponent, ProductlistComponent,LoginComponent],
  imports: [BrowserModule, FormsModule],  // Add BrowserModule here
})

export class AppModule {}
