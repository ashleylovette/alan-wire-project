import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { MainGridComponent } from './main-grid/main-grid.component';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent

    MainGridComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
