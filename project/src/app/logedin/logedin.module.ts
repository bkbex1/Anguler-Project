import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FndUserProfileComponent } from './fnd-user-profile/fnd-user-profile.component';
import { FriendsComponent } from './friends/friends.component';
import { PostComponent } from '../core/post/post.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { HomeComponent } from '../core/home/home.component';


@NgModule({
  declarations: [
    FndUserProfileComponent,
    FriendsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  exports:[
    FndUserProfileComponent,
    FriendsComponent,
    PostComponent,

  ], 
  providers:[
    UserService
  ]
})
export class LogedinModule { }
