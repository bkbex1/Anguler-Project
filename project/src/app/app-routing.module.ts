import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { LogInComponent } from './core/auth/log-in/log-in.component';
import { PostComponent } from './core/post/post.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { FndUserProfileComponent } from './logedin/fnd-user-profile/fnd-user-profile.component';
import { FriendsComponent } from './logedin/friends/friends.component';
import { ProfileComponent } from './logedin/profile/profile.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UserService } from './user.service';
import { StartResolver } from './core/start.resolver';
import { AuthActivate } from './sheared/guards/auth.activate';

const routes: Routes = [
  {
    path:"home",
    resolve: {allPosts:StartResolver},
    component:HomeComponent,
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"log-in",
    component:LogInComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Login',
      loginRequired: false
    }
  }, 
  {
    path:"register",
    component:RegisterComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Register',
      loginRequired: false
    }
  },
  {
    path:"account",
    component:ProfileComponent
  },
  {
    path:"friends",
    component:FriendsComponent
  },
  {
    path:"friends/:id",
    component:FndUserProfileComponent
  },
  {
    path:"post/:idPost/:picId",
    component:PostComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(userSurvies:UserService){

  }
 }
