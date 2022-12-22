import { Component, ViewChild } from '@angular/core';
import { AbstractControl, NgForm, NgModel, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

  @ViewChild("registerForm") registerForm: NgForm | undefined
  @ViewChild("name") name:NgModel | undefined
  @ViewChild("email") email:NgModel | undefined
  @ViewChild("password") password:NgModel | undefined
  @ViewChild("rePassword") rePassword:NgModel | undefined


  userService?: UserService;
  constructor(userService:UserService){
    this.userService = userService;
  }

  logInHandle(): void{
    this.userService!.logIn()
  }
}
