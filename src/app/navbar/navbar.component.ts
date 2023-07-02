import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isLinkActive(link: string): boolean {
    return this.router.url === link;
  }

  toLandingPage(){
    document.getElementById("landing-page").scrollIntoView({behavior:"smooth"});
  }

  toAboutPage(){
    document.getElementById("about-page").scrollIntoView({behavior:"smooth"});
  }

  toExperiencePage(){
    document.getElementById("github-graph").scrollIntoView({behavior:"smooth"});
  }

  toProjectsPage(){
    document.getElementById("projects-page").scrollIntoView({behavior:"smooth"});
  }

  toContactsPage(){
    document.getElementById("footer").scrollIntoView({behavior:"smooth"});
  }
}
