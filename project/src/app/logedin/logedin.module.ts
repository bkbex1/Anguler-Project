import { NgModule } from '@angular/core';
import { FndUserProfileComponent } from './fnd-user-profile/fnd-user-profile.component';
import { FriendsComponent } from './friends/friends.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UserService } from '../user.service';
import { RoutingModule } from '../routing/routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    FndUserProfileComponent,
    FriendsComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    RouterModule
  ],
  exports:[
    FndUserProfileComponent,
    FriendsComponent,
  ], 
  providers:[
    UserService
  ]
})
export class LogedinModule { }
