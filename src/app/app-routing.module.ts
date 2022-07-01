
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path: '', redirectTo: '/custom-dashboard', pathMatch: 'full' },
  {path: 'custom-dashboard', component: HomeComponent },
  {path: 'login', component: AuthComponent},
  {path: '**', redirectTo: '/custom-dashboard'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

