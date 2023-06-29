import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GithubGraphComponent } from './github-graph/github-graph.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { ChatbotService } from './chatbot.service';
import { ChatbotComponent } from './chatbot/chatbot.component'; // Make sure the path is correct
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    AboutPageComponent,
    GithubGraphComponent,
    LoadingScreenComponent,
    ChatbotComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ChatbotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
