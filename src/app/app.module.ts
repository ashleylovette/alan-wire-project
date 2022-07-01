import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SizeDirective } from './size.directive';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardItemComponent } from './main-grid/dashboard-item/dashboard-item.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { DashboardFormComponent } from './dashboard-form/dashboard-form.component';
import { ToggleComponent } from './toggle/toggle.component';
import { MainGridComponent } from './main-grid/main-grid.component';
import { AlertComponent } from './left-sidebar/alert/alert.component';
import { ConfirmDeleteComponent } from './left-sidebar/confirm-delete/confirm-delete.component';
import { ExitComponent } from './exit/exit.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    MainGridComponent,
    FooterComponent,
    HeaderComponent,
    DashboardItemComponent,
    SizeDirective,
    RightSidebarComponent,
    DashboardFormComponent,
    ToggleComponent,
    AlertComponent,
    ConfirmDeleteComponent,
    ExitComponent,
    HomeComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
