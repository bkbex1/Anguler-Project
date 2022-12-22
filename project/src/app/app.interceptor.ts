import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Inject, Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, combineLatest, map, Observable, of, switchMap, take, throwError, withLatestFrom, zip } from "rxjs";
import { UsersService } from "./users.service";
import { API_ERROR } from "./sheared/constants";


@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    @Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>,
    private router: Router,
    private usersService: UsersService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ url: req.url, withCredentials: true })
    return next.handle(req)
    // .pipe(
    //   catchError(err => of(err).pipe( // combineLatest([err], this.authService.user$).pipe(take(1))
    //     switchMap((err) => {
    //       if (err.status === 401) { return [[err, null]] }
    //       return zip([err], this.authService.user$).pipe(take(1))
    //     }),
    //     switchMap(([err, user]) => {
    //       if (err.status === 401) {
    //         if (!user) {
    //           this.router.navigate(['/auth/login']);
    //         } else {
    //           this.router.navigate(['/auth/no-permissions']);
    //         }
    //       } else {
    //         this.apiError.next(err);
    //         this.router.navigate(['/error']);
    //       }
    //       return throwError(() => err);
    //     })
    //   ))
    // );
  }

}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
};
