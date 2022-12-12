import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { HomeComponent } from '../core/home/home.component';
import { LogInComponent } from '../core/log-in/log-in.component';
import { RegisterComponent } from '../core/register/register.component';
import { FriendsComponent } from '../logedin/friends/friends.component';
import { ProfileComponent } from '../logedin/profile/profile.component';
import { AboutComponent } from '../core/about/about.component';

const routes: Route[] = [
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutingModule { }
