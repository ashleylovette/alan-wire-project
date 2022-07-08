import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { take, exhaustMap } from 'rxjs/operators'
import { AuthService } from '../auth/auth.service'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                if (!user) { return next.handle(req)}

                const modifiedReq = req.clone({
                    headers: new HttpHeaders().set(`Authorization`, 'Bearer ' + localStorage.getItem('Bearer'))

                    // (`Bearer `, localStorage.getItem('Bearer'))
                })
                return next.handle(modifiedReq)
            })
        )
    }
}

