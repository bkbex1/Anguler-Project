import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent{

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(public userService:UserService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loginHandle(): void{
    this.userService.logIn
  }
  logOutHandle(): void{
    this.userService.logOut
  }

}
