import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})


export class LogInComponent {

  @ViewChild("logInForm") logInForm: NgForm | undefined
  @ViewChild("email") email:NgModel | undefined
  @ViewChild("pass") pass:NgModel | undefined
  
  userService?: UserService;
  constructor(userService:UserService){
    this.userService = userService;
  }

  logInHandle(): void{
    this.userService!.logIn()
  }
}
