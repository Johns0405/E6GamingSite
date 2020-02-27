import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './CSGO/CSGO.component';
import { TwitchComponent } from './twitch/Twitch.component';
import { DonateComponent } from './donate/donate.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    TwitchComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'csgo', component: CounterComponent },
      { path: 'twitch', component: TwitchComponent },
      { path: 'donate', component: DonateComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
