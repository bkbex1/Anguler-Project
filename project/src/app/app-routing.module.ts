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
    canActivate: [AuthActivate],
    component:HomeComponent,
    data: {
      title: 'Home',
      loginRequired: false
    }
  },
  {
    path:"",
    canActivate: [AuthActivate],
    component:HomeComponent,
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
    canActivate: [AuthActivate],
    component:ProfileComponent,
    data: {
      title: 'Account',
      loginRequired: true
    }
  },
  {
    path:"friends",
    canActivate: [AuthActivate],
    component:FriendsComponent,
    data: {
      title: 'Friends',
      loginRequired: false
    }
  },
  {
    path:"friends/:id",
    canActivate: [AuthActivate],
    component:FndUserProfileComponent,
    data: {
      title: 'Friend',
      loginRequired: true
    }
  },
  {
    path:"post/:idPost/:picId",
    canActivate: [AuthActivate],
    component:PostComponent,
    data: {
      title: 'Post',
      loginRequired: false
    }
  },
  {
    path:"about",
    canActivate: [AuthActivate],
    component:AboutComponent,
    data: {
      title: 'About Us',
      loginRequired: false
    }
  },
  {
    path:"**",
    component:NotFoundComponent,
    data: {
      title: 'Page Not Found',
      loginRequired: false
    }
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
