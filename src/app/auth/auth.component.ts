import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  userEmail: string ="";
  error: string = null;
  isLoginMode = true;

  // constructor(private authService: AuthService, private router: Router, private http: HttpClient ) { }
  constructor( private router: Router, private http: HttpClient ) { }

  ngOnInit(): void {
  }
//commented out onLogin function because correct endpoints haven't been put in
  // onLogin(form: NgForm) {
  //   //if there isn't a valid form, the function does not run
  //   if (!form.valid) {
  //     return;
  //   }
  //   //declaring variables
  //   const email = form.value.email;
  //   const password = form.value.password;

  //   let authObs: Observable<any> =
  //     this.authService.login(email, password);

  //   authObs.subscribe(
  //     resData => {
  //       console.log(resData);
  //       this.router.navigate(['/home']);
  //    },
  //    errorMessage => {
  //      console.log(errorMessage);
  //      this.error = errorMessage;
  //    }
  //   );

  //   form.reset();
  //   }
//the previous way of doing this didn't require next: error: complete:
//https://rxjs.dev/deprecations/subscribe-arguments check here for
//the reasoning behind the deprecation of the usual way of .subscribe
//this uses the AuthService login method & subscribes to it
//it sends the login request

  // if (this.isLoginMode) {
  //   authObs = this.authService.login(email,password);
  // }

  // }

    // if (this.isLoginMode) {
    //   this.authService.login(email, password).subscribe({
    //     next: (resData) => console.log(resData),
    //     error: (errorMessage) => {
    //       console.log(errorMessage);
    //       this.error = errorMessage;
    //     },
    //     complete: () => console.info('complete')
    //   })
    // }
  }
