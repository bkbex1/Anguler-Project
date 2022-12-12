import { Component } from '@angular/core';
import { IUser, UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.sass']
})


export class FriendsComponent {
  users!:IUser[]

  constructor(private userSurvise:UsersService){}
  ngOnInit(): void {
    this.userSurvise.getUsers().subscribe({
      next: (value)=>{
        this.users = value;
      },
      error:(err) =>{
        console.log(err)
      }
    })
  }
}
