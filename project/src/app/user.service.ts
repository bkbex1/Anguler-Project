import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './sheared/interfaces';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  isLogged: boolean = false;
  
  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor(private storage:StorageService, private http:HttpClient) { 
    this.isLogged = this.storage.getItem("isLogged")
  }

  logIn(email: string, password: string):Observable<IUser>{
    this.storage.setItem("isLogged", true)
    return this.http.post<IUser>('https://dummyjson.com/auth/login', { email, password });
  
  }
  logOut():void{
    this.user = null;
    this.storage.setItem("isLogged", false)
  }

  register(username: string, email: string, password: string, rePassword: string, tel?: string) {
    return this.http.post<IUser>('/api/register', { username, email, password, rePassword, tel })
  }
}
