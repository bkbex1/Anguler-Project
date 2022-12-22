import { Component, Injectable, OnInit } from '@angular/core';
import { Post, PostsService } from 'src/app/posts.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { IPost } from 'src/app/interfaces/index';
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
  allPosts!:IPost[];
  isLoaded:boolean = false;
  
  findUserPosts(userId:number){
   return this.allPosts.filter(e=>e.userId==userId)
  }

  constructor(private postSurvice:PostsService){
    this.postSurvice.getNewPosts().subscribe({
      next: (value)=>{
        this.allPosts = value.posts
        this.addPictures(this.allPosts);
      },      
      error:(err) =>{
        console.log(err)
      }
    });
    

  }
  addPictures(allPosts:IPost[]):void{
    for(let post of  this.allPosts){
      let number = Math.floor(Math.random()*29);
      this.postSurvice.getPic(number).subscribe({
        next: (value)=>{
          post.picture = value
        }
      })
    }
    this.isLoaded = true;
  }
  ngOnInit(): void {

  }
}
