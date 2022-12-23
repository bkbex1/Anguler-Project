import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostsService } from 'src/app/posts.service';
import { UsersService } from '../../users.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { StorageService } from 'src/app/storage.service';
import { IPic, IPost, IUser } from 'src/app/sheared/interfaces/index';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit{

  userPost!:IPost;
  user!:IUser;
  id!:string;
  picId:number;
  postId:number;
  picture!:IPic;
  isLogged:boolean;

  constructor(private activatedRoute:ActivatedRoute, private usersSurvice:UsersService,
    private postService:PostsService, private storage:StorageService, private userS:UserService,
    private router: Router){
    this.isLogged = this.userS.isLoggedIn
    this.postId = this.activatedRoute.snapshot.params['idPost'];
    this.picId = this.activatedRoute.snapshot.params['picId'];
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['idPost'];
    this.usersSurvice.getUserById(this.id).subscribe((value)=>{
      this.user = value;
    }),
    this.postService.getNewPost(this.postId).subscribe((value)=>{
      this.userPost = value;
    })
    this.postService.getPic(this.picId).subscribe((value)=>{
      this.picture = value;
    })

  }

}
