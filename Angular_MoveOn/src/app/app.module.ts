import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GetqouteComponent } from './getqoute/getqoute.component';
import { FooterComponent } from './footer/footer.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { PreviousenquiryComponent } from './previousenquiry/previousenquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GetqouteComponent,
    FooterComponent,
    OurserviceComponent,
    PreviousenquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
