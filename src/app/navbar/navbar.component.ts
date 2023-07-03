import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  activeLink: string = '/landing-page';
  previousActiveLink: string = '/landing-page';


  ngOnInit(): void {
    this.onScroll();
  }

  isLinkActive(link: string): boolean {
    return this.activeLink === link;
  }

  toLandingPage(){
    document.getElementById("landing-page").scrollIntoView({behavior:"smooth"});
  }

  toAboutPage(){
    document.getElementById("about-page").scrollIntoView({behavior:"smooth"});
  }

  toExperiencePage(){
    document.getElementById("experience-page").scrollIntoView({behavior:"smooth"});
  }

  toProjectsPage(){
    document.getElementById("projects-page").scrollIntoView({behavior:"smooth"});
  }

  toContactsPage(){
    document.getElementById("footer").scrollIntoView({behavior:"smooth"});
  }

  @HostListener('window:scroll', ['$event'])
onScroll() {
  const sections = [
    { id: 'landing-page', link: '/landing-page' },
    { id: 'about-page', link: '/about-page' },
    { id: 'experience-page', link: '/experience-page' },
    { id: 'projects-page', link: '/projects-page' },
    { id: 'footer', link: '/contacts-page' }
  ];

  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  for (const section of sections) {
    const element = document.getElementById(section.id);
    if (element && scrollPosition >= element.offsetTop - 100) {
      this.previousActiveLink = this.activeLink;
      this.activeLink = section.link;
    }
  }
}

}
