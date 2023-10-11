import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  currentProjectIndex: number = -1;
  currentImage: string = '';
  modalOpen: boolean = false;
  selectedImageIndex: number = 0;
  
  projectImages: string[][] = [
    ['./assets/projects/postnest-image1.png', './assets/projects/postnest-image2.png', './assets/projects/postnest-image3.png', './assets/projects/postnest-image4.png'],
    ['./assets/projects/badbeat-image1.png', './assets/projects/badbeat-image2.png', './assets/projects/badbeat-image3.png', './assets/projects/badbeat-image4.png'],
    ['./assets/projects/budgetbuddy-image1.png', './assets/projects/budgetbuddy-image2.png', './assets/projects/budgetbuddy-image3.png', './assets/projects/budgetbuddy-image4.png']
  ];
  
  projectNames: string[] = [
    'PostNest',
    'BadBeat E-Commerce Website',
    'Budget Buddy'
  ];
  
  projectTechnologies: string[] = [
    'VueJS, Bootstrap, PHP, Laravel, and MySQL',
    'HTML, CSS, Bootstrap, Javascript, PHP, and MySQL',
    'Angular, Bootstrap PHP, Laravel, and MySQL'
  ];
  
  projectDescriptions: string[] = [
    "PostNest is an engaging social media platform dedicated to capturing and sharing spontaneous thoughts. Crafted for those moments of inspiration, introspection, or simple daydreaming, it provides a space for users to effortlessly express and connect over shared sentiments.<br><br>On the frontend, the site utilizes <b>Vue 2</b>, a progressive JavaScript framework known for its adaptability and reactivity. This ensures that users encounter a fluid and dynamic experience when navigating through the platform and sharing their thoughts. Complementing Vue 2's capabilities, <b>Bootstrap</b> is integrated to guarantee that the platform's design remains not only aesthetically pleasing but also fully responsive. Whether accessed from a laptop or a mobile device, users are assured of a seamless experience.<br><br>The backend framework of choice is <b>Laravel</b>, a renowned <b>PHP</b> web application framework celebrated for its elegance, simplicity, and functionality. Its seamless integration with <b>MySQL</b> ensures robust and efficient data management. This combination ensures that every user's posts, interactions, and profiles are securely stored, easily retrievable, and consistently managed.",
    "Badbeat is a digital marketplace designed to bridge the gap between businesses and their target audience. With an emphasis on user experience, this platform provides a seamless shopping journey, ensuring users find what they're looking for and sellers can manage their inventories efficiently.<br><br>The site's frontend is crafted using <b>HTML</b>, giving structure to content. <b>CSS</b> adorns this foundation, ensuring a visually captivating user interface. <b>JavaScript</b> powers the site's dynamic interactions, ensuring users experience smooth navigation. The addition of <b>Bootstrap</b> ensures that the site is adaptive across various devices, from desktops to smartphones, guaranteeing optimal viewing.<br><br>On the backend, <b>PHP</b> handles data processing tasks and interacts efficiently with the frontend, managing functionalities from user sign-ins to product listings. <b>MySQL</b>, a robust relational database management system, takes care of data storage and retrieval, handling everything from user profiles to transaction details.",
    "Budget Buddy is a comprehensive finance manager application tailored to empower individuals in their financial journey. With a focus on clarity, simplicity, and efficiency, it aims to transform the often-daunting task of personal finance management into a streamlined and enlightening experience.<br><br>For the frontend, Budget Buddy leverages the power of <b>Angular</b>, a sophisticated and modular JavaScript framework. With Angular at the helm, the app delivers a seamless and dynamic user interface, enhancing real-time data interactions and visualization. Working hand-in-hand with Angular, <b>Bootstrap</b> ensures that the app’s layout is both visually appealing and responsive. This combination guarantees users a consistent and optimized experience across diverse devices, from desktops to mobile phones.<br><br>The backend is meticulously constructed using <b>Laravel</b>, a robust <b>PHP</b> web application framework known for its scalability and security features. Paired with Laravel's capabilities, <b>MySQL</b> serves as the database management system, ensuring that user data—be it transaction histories, budget allocations, or savings goals—is securely stored, easily accessible, and efficiently processed."
  ];

  projectRepositories: string[] = [
    'https://github.com/DarrelMendoza/authentication-form#postnest-social-media-site',
    'https://github.com/DarrelMendoza/badbeat-ecommerce-site#badbeat-e-commerce-site',
    'https://github.com/Finance-Manager-Application/finance-app-ui#financeapp'
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'click', (event: Event) => {
      this.onClickOutsideModal(event);
    });
    
    // Reset selected image index when the modal is closed
    const modal = document.getElementById('myModal');
    modal.addEventListener('transitionend', () => {
      if (!this.modalOpen) {
        this.selectedImageIndex = 0;
      }
    });
  }
  
  openModal(index: number) {
    this.currentProjectIndex = index;
    this.currentImage = this.projectImages[index][0];
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
    this.modalOpen = true;
    if (this.modalOpen) {
      document.body.style.overflowY = 'hidden'; // Prevent body scroll when nav is open
    } else {
      document.body.style.overflowY = 'auto'; // Allow body scroll when nav is closed
    }
  }
  
  closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    this.modalOpen = false;
    if (this.modalOpen) {
      document.body.style.overflowY = 'hidden'; // Prevent body scroll when nav is open
    } else {
      document.body.style.overflowY = 'auto'; // Allow body scroll when nav is closed
    }
  }
  
  changeImage(index: number) {
    this.selectedImageIndex = index;
    this.currentImage = this.projectImages[this.currentProjectIndex][index];
  }

  onClickOutsideModal(event: Event): void {
    // Check if the modal is open
    if(this.modalOpen) {
      // Get the modal element
      const modal = document.getElementById('myModal');

      // Check if the click was outside the modal
      if(event.target == modal) {
        // Close the modal
        this.closeModal();
      }
    }
  }
}