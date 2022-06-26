import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/custom-dashboard', pathMatch: 'full' },
  {path: 'custom-dashboard', component: AppComponent, canActivate: [AuthGuard] },
  {path: 'login', component: AuthComponent},
  {path: '**', redirectTo: '/custom-dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
