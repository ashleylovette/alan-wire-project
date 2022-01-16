import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

import { HeaderComponent } from './header/header.component';

import { MainGridComponent } from './main-grid/main-grid.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DashboardItemComponent } from './main-grid/dashboard-item/dashboard-item.component';
import { ToggleSidebarDirective } from './toggle-sidebar.directive';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    MainGridComponent,
    FooterComponent,
    HeaderComponent,
    DashboardItemComponent,
    ToggleSidebarDirective,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
