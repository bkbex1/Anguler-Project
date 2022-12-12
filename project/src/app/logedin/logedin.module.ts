import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FndUserProfileComponent } from './fnd-user-profile/fnd-user-profile.component';



@NgModule({
  declarations: [
    FndUserProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FndUserProfileComponent
  ]
})
export class LogedinModule { }
