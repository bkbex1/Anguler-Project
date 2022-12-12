import { Component, OnInit } from '@angular/core';
import { IPost, PostsService } from '../posts.service';
import { IUser, UsersService } from '../users.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.sass']
})
 
export class FrontendComponent implements OnInit{
  customer: IUser[] = [];
  posts:IPost[] = [];
  userPosts:IPost[] = [];

  findUserPosts(userId:number){
   return this.posts.filter(e=>e.userId==userId)
  }

  constructor(private userSurvise:UsersService,private postSurvice:PostsService){}

  ngOnInit(): void {
    this.userSurvise.getUsers().subscribe({
      next: (value)=>{
        this.customer = value;
      },
      error:(err) =>{
        console.log(err)
      }
    })
    this.postSurvice.getPosts().subscribe({
      next: (value)=>{
        this.posts = value;
      },
      error:(err) =>{
        console.log(err)
      }
    })
  }
}
