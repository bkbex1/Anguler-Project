import { NgModule, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  exports:[
  ]
})
export class CoreModule { }
