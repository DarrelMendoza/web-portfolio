import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isNavVisible: boolean = false;
  isBurgerVisible: boolean = false;
  private scrollEvents = new Subject<Event>();
  activeLink: string = '/';
  previousActiveLink: string = '/';

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.handleNavigation(this.router.url); 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.handleNavigation(event.url);
      }
    });
    this.checkScreenSize();

    this.scrollEvents.pipe(
      debounceTime(100)
    ).subscribe((event) => this.handleScroll(event));
  }

  ngOnDestroy(): void {
    this.scrollEvents.unsubscribe();
  }

  private handleNavigation(url: string) {
    setTimeout(() => {
      const path = url.split('/')[1];
      switch (path) {
        case '': this.toLandingPage(); break;
        case 'about': this.toAboutPage(); break;
        case 'experience': this.toExperiencePage(); break;
        case 'skills': this.toSkillsPage(); break;
        case 'projects': this.toProjectsPage(); break;
        case 'contributions': this.toContributionsPage(); break;
        case 'contact': this.toContactsPage(); break;
        default: this.toLandingPage(); break;
      }
    }, 500);
  }

  toggleSideNav() {
    this.isNavVisible = !this.isNavVisible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isBurgerVisible = window.innerWidth < 1121;
  }

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

  toContactsPage(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollEvents.next(event);
  }

  private handleScroll(event: Event) {
    const sections = [
      { id: 'landing-page', link: '/' },
      { id: 'about', link: '/about' },
      { id: 'experience', link: '/experience' },
      { id: 'skills', link: '/skills' },
      { id: 'projects', link: '/projects' },
      { id: 'contributions', link: '/contributions' },
      { id: 'contact', link: '/contact' }
    ];
  
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let currentSection: string | null = null;
  
    // Check if the user has scrolled to the top of the page
    if (scrollPosition < 1) { // Adjust the threshold value as needed
      currentSection = '/';
    } else {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          const inView = (scrollPosition >= elementTop - window.innerHeight * 0.3) && 
                         (scrollPosition < elementTop + elementHeight - window.innerHeight * 0.3);
  
          if (inView) {
            currentSection = section.link;
            break;
          }
        }
      }
    }
  
    if (currentSection && this.activeLink !== currentSection) {
      this.previousActiveLink = this.activeLink;
      this.activeLink = currentSection;
      this.location.replaceState(currentSection);
    }
  }
}
