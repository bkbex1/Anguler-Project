import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPost, PostsService } from 'src/app/posts.service';
import { UserService } from 'src/app/user.service';
import { IPic, IUser, UsersService } from 'src/app/users.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { HomeComponent } from '../home/home.component';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit{
  userPosts!:IPost[];
  user!:IUser;
  id!:string;
  picId:number;
  postId:number;
  picture!:IPic;
  sub?: Subscription;
  isLogged:boolean;

  constructor(private activatedRoute:ActivatedRoute, private userSurvice:UsersService,
    private postService:PostsService, private storage:StorageService){
      this.isLogged = this.storage.getItem("isLogged")

    this.postId = this.activatedRoute.snapshot.params['id'];
    this.picId = this.activatedRoute.snapshot.params['picId'];
  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userSurvice.getUserById(this.id).subscribe((value)=>{
      this.user = value;
      console.log(value)
    }),
    this.postService.getPosts().subscribe((value)=>{
      this.userPosts = value.filter(e=>e.userId==this.user.id);
    })
    this.postService.getPic(this.picId).subscribe((value)=>{
      this.picture = value;
    })

  }

  

}
