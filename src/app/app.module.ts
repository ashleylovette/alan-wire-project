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
import { ToggleSidebarDirective } from './toggle-left-sidebar.directive';
import { SizeDirective } from './size.directive';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { ToggleRightSidebarDirective } from './toggle-right-sidebar.directive';
import { DashboardFormComponent } from './dashboard-form/dashboard-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    MainGridComponent,
    FooterComponent,
    HeaderComponent,
    DashboardItemComponent,
    ToggleSidebarDirective,
    SizeDirective,
    RightSidebarComponent,
    ToggleRightSidebarDirective,
    DashboardFormComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
