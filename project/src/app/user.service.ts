import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, Observable, Subscription, tap, throwError } from 'rxjs';
import { bootUser, IUser } from './sheared/interfaces';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // isLogged: boolean = false;
  
  user: IUser | null = null;
  bootUser:bootUser|null = null;
  
  public user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(
    filter((val): val is IUser | null => val !== undefined)
  );
  subscription: Subscription;


  public get isLoggedIn():boolean {
    return this.user !== null;
  }

  constructor(private storage:StorageService, private http:HttpClient) { 
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    });
  }

  saveCanges(){
    return this.http.get<any>('https://dummyjson.com/users/search?q='+name)
    .pipe(tap(userBootWeb => this.user$$.next(userBootWeb.users[0])));
  }
  logIn(name: string, password: string):Observable<bootUser>{
    return this.http.get<any>('https://dummyjson.com/users/search?q='+name)
    .pipe(tap(userBootWeb => this.user$$.next(userBootWeb.users[0])));



    // return this.http.post<IUser>('https://dummyjson.com/auth/login', { email, password });

    // return this.http.post<IUser>('https://dummyjson.com/auth/login', {
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     username: name,
    //     password: password,
    // // expiresInMins: 60, // optional
    // })
      }

  logOut():void{
    this.user$$.next(null)
  }

  register(username: string, email: string, password: string, rePassword: string) {
    return this.http.get<IUser>('https://dummyjson.com/users/search?q='+username)
    .pipe(tap(user => this.user$$.next(user)));

    // return this.http.post<IUser>('/api/register', { username, email, password, rePassword, tel })

  }

  getProfile() {
    return this.http.get<IUser>('https://dummyjson.com/users/'+this.user?.id)
    // return this.http.get<IUser>('https://dummyjson.com/auth/login')
      .pipe(
        tap(user => {
          this.user$$.next(user)
        }),
        catchError((err) => {
          this.user$$.next(null);
          return throwError(() => err);
        })
      );
  }
}
