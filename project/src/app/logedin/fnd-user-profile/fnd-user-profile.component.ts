import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/posts.service';
import { UsersService } from '../../users.service';
import { StorageService } from 'src/app/storage.service';
import { IPost, IUser } from 'src/app/interfaces';

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
    this.postService.getUserAllNewPosts(id).subscribe((value)=>{
      this.fndPosts = value.posts;
    })
  }

  
}
