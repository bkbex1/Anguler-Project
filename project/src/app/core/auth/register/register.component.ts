import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, NgForm, NgModel,FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/sheared/validators';
import { UserService } from '../../../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

  appEmailDomains = ['bg', 'com'];
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, appEmailValidator(this.appEmailDomains)]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: []
    }, {
      validators: [sameValueGroupValidator('password', 'rePassword')]
    })
  });


  constructor(private userService:UserService, private fb: FormBuilder, private router:Router){
  }

  registerHandler() {
    if(this.form.invalid){ return;}
    const {username, email, pass:{ password, rePassword} ={}} = this.form.value

    this.userService.register(username!,email!,password!,rePassword!)
    .subscribe(user=>{ 
      this.userService.user = user;
      this.router.navigate(["/account"])
    })
  }

}
