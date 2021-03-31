import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddColorComponent } from './add-color/add-color.component';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateZoneComponent } from './update-zone/update-zone.component';
import { DeleteZoneComponent } from './delete-zone/delete-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddColorComponent,
    AddZoneComponent,
    UpdateZoneComponent,
    DeleteZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
