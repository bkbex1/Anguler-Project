import { Component, Injectable, Input } from '@angular/core';
import { IPost, PostsService } from 'src/app/posts.service';
import { IPic, IUser, UsersService } from 'src/app/users.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

@Injectable({
  providedIn: 'root'
})
export class HomeComponent {
  customer: IUser[] = [];
  posts:IPost[] = [];
  postsUser1:IPost[] = []
  userPosts:IPost[] = [];
  userPic:IPic[] = [];
  
  findUserPosts(userId:number){
   return this.posts.filter(e=>e.userId==userId)
  }

  constructor(private usersSurvise:UsersService, private postSurvice:PostsService){

  }
  ngOnInit(): void {
    this.usersSurvise.getUsers().subscribe({
      next: (value)=>{
        this.customer = value;
      },
      error:(err) =>{
        console.log(err)
      }
    }),
    this.postSurvice.getPosts().subscribe({
      next: (value)=>{
        this.posts = value;
        setTimeout(()=>{
          let lenght = this.posts.length
          for(let post of this.posts){
            let number = Math.floor(Math.random()*29);
            this.postSurvice.getPic(number).subscribe({
              next: (value)=>{
                post.picture = value
              }
            })
          }
        }, 1000)
      }
    })
  }
}
