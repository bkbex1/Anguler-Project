import { NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from './core/core.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StorageService } from './storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProfileComponent } from './logedin/profile/profile.component';
import { LogInComponent } from './core/auth/log-in/log-in.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { LogedinModule } from './logedin/logedin.module';
import { MainComponent } from './core/main/main.component';
import { AboutComponent } from './core/about/about.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { PostComponent } from './core/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LogInComponent,
    RegisterComponent,
    MainComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    PostComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CoreModule,
    LogedinModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,

  ],
  exports:[
    AppComponent,
  ],
  providers: [ StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
