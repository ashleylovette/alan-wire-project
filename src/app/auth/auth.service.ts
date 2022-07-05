import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';

interface AuthResponseData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  name: string;
  token: {
    expiry: Date;
    value: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenExpirationTimer: any;
  user = new BehaviorSubject<User | null>(null)
  apiUrl = `http://localhost:3000/api/v1/users`

  constructor(private http: HttpClient, private router: Router) { }

  login(form) {
    return this.http.post<AuthResponseData>(this.apiUrl + '/login', form)
    .pipe(
      map((res: any) => {
        const user = res;
        // console.log(user);
        // change to force Git updata

        if ( user.success ) {
          console.log("success", user)
          localStorage.setItem('Bearer', user.payload.token.value);
          // console.log(localStorage)
          const newUser = new User(
            user.payload.user.id,
            user.payload.user.email,
            user.payload.token.value,
            user.payload.token.expiry,
            user.payload.user.first_name,
            user.payload.user.last_name
          );
          console.log(newUser)
          console.log(this.user)
          this.user.next(newUser);
        }
      }
    ));
  }

  // autoLogin() {
  //   const userData: {
  //     email: string;
  //     id: string;
  //     _token: string;
  //     _tokenExpirationDate: string;
  //   } = JSON.parse(localStorage.getItem('userData'));
  //   if (!userData) {
  //     return;
  //   }

  //   const loadedUser = new User(
  //     userData.id,
  //     userData.email,
  //     userData.first_name,
  //     userData._token,
  //     new Date(userData._tokenExpirationDate)
  //     );

  //   if (loadedUser.token) {
  //     this.user.next(loadedUser);
  //     const expirationDuration =
  //       new Date(userData._tokenExpirationDate).getTime() -
  //       new Date().getTime();
  //     this.autoLogout(expirationDuration)
  //   }
  // }

  // logout() {
  //   // this.user.next(null);
  //   // this.router.navigate(['/login']);
  //   // localStorage.removeItem('Bearer');
  //   // if (this.tokenExpirationTimer) {
  //   //   clearTimeout(this.tokenExpirationTimer);
  //   // }
  //   // this.tokenExpirationTimer = null;

  // }

  logout() {
    return this.http
      .delete(this.apiUrl + '/logout')
      .subscribe((res: any) => {
        const loggedOut = res;
        if (loggedOut.success) {
          console.log(res);
          this.user.next(null);
          this.router.navigate(['/login']);
        }
      });
  }


  // autoLogout(expirationDuration: number) {
  //   this.tokenExpirationTimer = setTimeout(() => {
  //     this.logout();
  //   }, expirationDuration);
  // }


  // //error handling function
  // private handleError(errorRes: HttpErrorResponse) {
  //   let errorMessage = 'An error occured!';
  //   if (!errorRes.error || !errorRes.error.error) {
  //     //previous recommendation was to return throwError from rxjs but it has been deprecated
  //     return throwError(() => new Error(errorMessage));
  //   }
  //     switch (errorRes.error.error.message) {
  //       case 'EMAIL_NOT_FOUND':
  //         errorMessage = 'This email not found';
  //         break;
  //       case 'INVALID_PASSWORD':
  //         errorMessage = 'Invalid password';
  //         break;
  //       case 'THIS_USER_DISABLED':
  //         errorMessage = 'This user has been disabled by an adminstrator';
  //     }
  //     return throwError(() => new Error(errorMessage));
  //   }

  //    //authentication handling function
  // private handleAuthentication(
  //   id: number,
  //   email: string,
  //   first_name: string,
  //   last_name: string,
  //   name: string,
  //   token: {
  //     expiry: Date,
  //     value: string,
  //   }
  //   ) {
  //   // const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  //   const user = new User(email, first_name, last_name, token.value, token.expiry);
  //   this.user.next(user);
  //   localStorage.setItem('userData', JSON.stringify(user));
  // }

}
