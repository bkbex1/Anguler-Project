import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';



@NgModule({
  declarations: [UserService],
  imports: [
    CommonModule,
    FormsModule,
    
  ]
})
export class CoreModule { }
