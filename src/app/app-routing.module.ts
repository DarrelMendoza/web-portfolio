import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your page components here
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { GithubGraphComponent } from './github-graph/github-graph.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Set LandingPageComponent for the root path
  { path: 'about', component: AboutPageComponent },
  { path: 'experience', component: ExperiencePageComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'contributions', component: GithubGraphComponent },
  { path: 'contact', component: FooterComponent },
  // Remove the redirection to '/landing-page'
  { path: '**', redirectTo: '' } // Redirect unknown paths to the root
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
