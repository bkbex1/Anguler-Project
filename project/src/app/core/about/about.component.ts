import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, NgForm, NgModel, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit, AfterViewInit {
  
  @ViewChild("contactForm") contactForm: NgForm | undefined
  @ViewChild("name") name:NgModel | undefined
  @ViewChild("email") email:NgModel | undefined
  @ViewChild("subject") subject:NgModel | undefined
  @ViewChild("message") message:NgModel | undefined


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.email)
  }
}
