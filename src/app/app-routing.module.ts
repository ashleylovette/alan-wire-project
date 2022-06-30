
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path: '', redirectTo: '/custom-dashboard', pathMatch: 'full' },
  {path: 'custom-dashboard', component: HomeComponent },
  {path: '**', redirectTo: '/custom-dashboard'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

