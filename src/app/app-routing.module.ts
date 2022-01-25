
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardStartComponent } from "./dashboard/main-grid/dashboard-start/dashboard-start.component";
import { MainGridComponent } from "./dashboard/main-grid/main-grid.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: DashboardStartComponent},
    {path: ':id', component: MainGridComponent}
  ]},

]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

