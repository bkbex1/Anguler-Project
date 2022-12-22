import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { StorageService } from 'src/app/storage.service';
import { IUser } from 'src/app/sheared/interfaces';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.sass']
})


export class FriendsComponent {
  users!:IUser[];
  isLogged:boolean;
  friends!:IUser[];
  numOfFriends:number = Math.random()*10;

  constructor(private userSurvise:UsersService, private storage:StorageService){
    this.isLogged = this.storage.getItem("isLogged")
  }
  ngOnInit(): void {
    this.userSurvise.getUsers().subscribe({
      next: (value)=>{
        this.users = value.users;
      },
      error:(err) =>{
        console.log(err)
      }
    })
  }




}

