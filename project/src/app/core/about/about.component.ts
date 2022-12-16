import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
  
  @ViewChild("contactForm") contactForm: NgForm | undefined
  @ViewChild("name") name:NgModel | undefined
  @ViewChild("email") email:NgModel | undefined
  @ViewChild("subject") subject:NgModel | undefined
  @ViewChild("message") message:NgModel | undefined

}
