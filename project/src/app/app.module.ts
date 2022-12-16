import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './core/home/home.component';
import { ProfileComponent } from './logedin/profile/profile.component';
import { AboutComponent } from './core/about/about.component';
import { FriendsComponent } from './logedin/friends/friends.component';
import { LogInComponent } from './core/log-in/log-in.component';
import { RegisterComponent } from './core/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FrontendComponent } from './frontend/frontend.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogedinModule } from './logedin/logedin.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { StorageService } from './storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    FriendsComponent,
    LogInComponent,
    RegisterComponent,
    FrontendComponent,
    NotFoundComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    LogedinModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FontAwesomeModule
  ],
  providers: [ StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
