import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

    // Existing code
    isNavVisible: boolean = false;
    isBurgerVisible: boolean = false;
  
    ngOnInit(): void {
      // Existing code
      this.onScroll();
      this.checkScreenSize();
    }
  
    toggleSideNav() {
      this.isNavVisible = !this.isNavVisible;
      // if (this.isNavVisible) {
      //   document.body.style.overflowY = 'hidden'; // Prevent body scroll when nav is open
      // } else {
      //   document.body.style.overflowY = 'auto'; // Allow body scroll when nav is closed
      // }
    }
  
    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.checkScreenSize();
    }
  
    checkScreenSize() {
      this.isBurgerVisible = window.innerWidth < 1121; // Example width
    }
  

  constructor(private router: Router) { }
  activeLink: string = '/landing-page';
  previousActiveLink: string = '/landing-page';

  isLinkActive(link: string): boolean {
    return this.activeLink === link;
  }

  toLandingPage(){
    document.getElementById("landing-page").scrollIntoView({behavior:"smooth"});
  }

  toAboutPage(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
  }

  toExperiencePage(){
    document.getElementById("experience").scrollIntoView({behavior:"smooth"});
  }

  toSkillsPage(){
    document.getElementById("skills").scrollIntoView({behavior:"smooth"});
  }

  toProjectsPage(){
    document.getElementById("projects").scrollIntoView({behavior:"smooth"});
  }

  toContributionsPage(){
    document.getElementById("contributions").scrollIntoView({behavior:"smooth"});
  }

  toBlogsPage(){
    document.getElementById("blogs-page").scrollIntoView({behavior:"smooth"});
  }

  toContactsPage(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }

  @HostListener('window:scroll', ['$event'])
onScroll() {
  const sections = [
    { id: 'landing-page', link: '/landing-page' },
    { id: 'about', link: '/about' },
    { id: 'experience', link: '/experience' },
    { id: 'skills', link: '/skills' },
    { id: 'projects', link: '/projects' },
    { id: 'contributions', link: '/contributions' },
    { id: 'blogs-page', link: '/blogs-page' },
    { id: 'contact', link: '/contact' }
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
