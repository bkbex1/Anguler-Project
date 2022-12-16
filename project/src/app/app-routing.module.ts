import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { LogInComponent } from './core/log-in/log-in.component';
import { RegisterComponent } from './core/register/register.component';
import { FrontendComponent } from './frontend/frontend.component';
import { FndUserProfileComponent } from './logedin/fnd-user-profile/fnd-user-profile.component';
import { FriendsComponent } from './logedin/friends/friends.component';
import { ProfileComponent } from './logedin/profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserService } from './user.service';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
    data:{
      // isLogged: userSurvies.isLogged;
    }
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"log-in",
    component:LogInComponent
  }, 
  {
    path:"register",
    component:RegisterComponent
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
