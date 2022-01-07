import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

import { HeaderComponent } from './header/header.component';

import { MainGridComponent } from './main-grid/main-grid.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    MainGridComponent,
    FooterComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
