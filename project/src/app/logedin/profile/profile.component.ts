import { Component } from '@angular/core';
import { IUser } from 'src/app/sheared/interfaces';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {

  myProfile:IUser|null= null;
  constructor(private userService:UserService){
    userService.getProfile().subscribe({
      next:(user)=>{
        this.myProfile = user;
      }
    })
  }

}
