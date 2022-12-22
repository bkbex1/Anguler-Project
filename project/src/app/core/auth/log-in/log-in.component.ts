import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})


export class LogInComponent {

  @ViewChild(NgForm,{ static: true }) logInForm!: ElementRef<HTMLInputElement>;


  constructor(private userService:UserService, private activatedRoute: ActivatedRoute, private router: Router){
  }

  logInHandle(logInForm:NgForm): void{
    const {email, password} = logInForm.value;
    this.userService.logIn(email, password).subscribe(user=>{
      this.userService.user = user;
      const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigate([returnUrl]);
    })

    

  }


}
