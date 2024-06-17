import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { NavbarComponent } from './navbar/navbar.component'; // Ensure NavbarComponent is imported
// Import your AuthGuard here

@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
  
    NavbarComponent // Ensure NavbarComponent is declared
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  // Add AuthGuard to the providers array
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
