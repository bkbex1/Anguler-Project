import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, PostsService } from 'src/app/posts.service';
import { IUser, UsersService } from 'src/app/users.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-fnd-user-profile',
  templateUrl: './fnd-user-profile.component.html',
  styleUrls: ['./fnd-user-profile.component.scss']
})
export class FndUserProfileComponent implements OnInit{
  friendUser!:IUser;
  fndPosts!:IPost[];
  
  isLogged:boolean;
  constructor(private userSurvice:UsersService, private activatedRoute:ActivatedRoute, 
    private postService:PostsService, private storage:StorageService){

      this.isLogged = this.storage.getItem("isLogged")
    }
    
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.userSurvice.getUserById(id).subscribe((value)=>{
      this.friendUser = value;
    })
    this.postService.getPosts().subscribe((value)=>{
      this.fndPosts = value.filter(e=>e.userId==this.friendUser.id);
    })
  }

  
}
