import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

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
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { HomeComponent } from './home/home.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialsPageComponent } from './testimonials-page/testimonials-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    AboutPageComponent,
    GithubGraphComponent,
    LoadingScreenComponent,
    ChatbotComponent,
    FooterComponent,
    ProjectsPageComponent,
    HomeComponent,
    ExperiencePageComponent,
    SkillsComponent,
    TestimonialsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ChatbotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
