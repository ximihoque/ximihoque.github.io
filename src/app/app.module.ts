import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GiftComponent } from './components/gift/gift.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VideoComponent } from './components/video/video.component';
import { StarComponent } from './components/star/star.component';
import { CakeComponent } from './components/cake/cake.component';
import { CandleComponent } from './components/candle/candle.component';
import { CampfireComponent } from './components/campfire/campfire.component';
import { FireComponent } from './components/fire/fire.component';
import { FireworkComponent } from './components/firework/firework.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    GiftComponent,
    ProfileComponent,
    VideoComponent,
    StarComponent,
    CakeComponent,
    CandleComponent,
    CampfireComponent,
    FireComponent,
    FireworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
