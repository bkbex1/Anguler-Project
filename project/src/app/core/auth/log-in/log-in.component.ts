import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/sheared/interfaces';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})


export class LogInComponent {

  @ViewChild(NgForm,{ static: true }) logInForm!: ElementRef<HTMLInputElement>;
  private user:IUser|null=null;

  constructor(private userService:UserService, private activatedRoute: ActivatedRoute, private router: Router){
  }

  logInHandle(logInForm:NgForm): void{
    const {name, password} = logInForm.value;
    this.userService.logIn(name, password).subscribe((bootUser)=>{
      this.user = bootUser.users[0];
      if(this.user.password && this.user.password==password && this.user.username==name) {
        this.userService.user$$.next(this.user)
        this.router.navigate(["/account"]);

      }else{
        alert("No such User")
        this.router.navigate(["/log-in"]);
        this.userService.user$$.next(null)

      }
      

    })
  }
}
