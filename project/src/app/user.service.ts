import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  isLogged: boolean = false;
  constructor() { }

  logIn():void{
    this.isLogged = true
  }
  logOut():void{
    this.isLogged = false
  }
}
