import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent{

  get isLogged(): boolean {
    return this.userService.isLoggedIn;
  }

  constructor(public userService:UserService, private router: Router, private UserService: UserService){}

  logOutHandle(): void{
    this.userService.user = null;
    this.router.navigate(['/']);
  }

}
