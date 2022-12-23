import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/sheared/interfaces';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/sheared/validators';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {

  changeForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: ['', [Validators.required]],
  });
  
  changeHandler(){
    
  }
  myProfile:IUser|null= null;
  constructor(private userService:UserService, private fb: FormBuilder){
    userService.getProfile().subscribe({
      next:(user)=>{
        this.myProfile = user;
      }
    })
  }

}
