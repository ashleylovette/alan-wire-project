import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const authObs = {
      next: (user: any) => (console.log(user)),
      error: (err: any) => console.log(err),
      complete: () => this.router.navigate(['/home']),
    };
    this.authService.login(form.value).subscribe(authObs);

    form.reset();
  }
}
