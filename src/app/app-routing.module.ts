import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your page components here
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GithubGraphComponent } from './github-graph/github-graph.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'experience-page', component: GithubGraphComponent },
  { path: 'projects-page', component: ProjectsPageComponent },
  { path: 'contacts-page', component: FooterComponent },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' }, // Redirect to the landing page if no path is provided
  { path: '**', redirectTo: '/landing-page' } // Redirect to the landing page for any unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
