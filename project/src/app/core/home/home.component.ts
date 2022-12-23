import { Component, Injectable, OnInit } from '@angular/core';
import { Post, PostsService } from 'src/app/posts.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { IPost } from 'src/app/sheared/interfaces/index';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

@Injectable({
  providedIn: 'root'
})
export class HomeComponent implements OnInit{
  allPosts:IPost[] = [];
  postsBfrStart!:IPost[];

  isLoaded:boolean = false;
  
  findUserPosts(userId:number){
   return this.allPosts.filter(e=>e.userId==userId)
  }

  constructor(private postSurvice:PostsService){
    this.postSurvice.getNewPosts().subscribe({
      next: (value)=>{
        this.postsBfrStart = value.posts
        this.addPictures(this.postsBfrStart);
      },      
      error:(err) =>{
        console.log(err)
      }
    });
  }
  addPictures(postsBfrStart:IPost[]):void{
    for(let post of postsBfrStart){
      let number = Math.floor(Math.random()*29);
      this.postSurvice.getPic(number).subscribe({
        next: (value)=>{
          post.picture = value
        }
      })
    }
    this.allPosts = this.postsBfrStart;
    console.log(this.allPosts)
  }
  ngOnInit(): void {

  }
}
