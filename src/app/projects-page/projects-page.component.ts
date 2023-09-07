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
    ['./assets/projects/medtechpro-image1.png', './assets/projects/medtechpro-image2.png', './assets/projects/medtechpro-image3.png'],
    ['./assets/projects/badbeat-image1.png', './assets/projects/badbeat-image2.png', './assets/projects/badbeat-image3.png'],
    ['./assets/projects/storefront-image1.png', './assets/projects/storefront-image2.png', './assets/projects/storefront-image3.png']
  ];
  
  projectNames: string[] = [
    'MedTech Pro',
    'BadBeat E-Commerce Website',
    'Storefront 2-Way Marketplace'
  ];
  
  projectIndustries: string[] = [
    'Healthcare',
    'Fashion',
    'Online Marketplace'
  ];
  
  projectDescriptions: string[] = [
    "Introducing MedTech Pro, the revolutionary hospital management app designed to streamline and enhance the efficiency of healthcare institutions. MedTech Pro is a comprehensive and intuitive solution that combines cutting-edge technology with advanced features to empower hospitals in providing top-notch patient care while optimizing operational workflows.<br><br>With MedTech Pro, hospitals can seamlessly manage various aspects of their operations, from patient admissions and appointments to billing and inventory management. The app's user-friendly interface ensures that healthcare professionals can navigate through its features effortlessly, saving time and reducing administrative burden.<br><br>MedTech Pro revolutionizes hospital management, enabling healthcare institutions to deliver exceptional patient care while optimizing operations. By leveraging the power of technology, hospitals can enhance efficiency, reduce costs, and ultimately improve patient outcomes. Experience the future of healthcare management with MedTech Pro.",
    "BadBeat is an all-in-one digital marketplace featuring a diverse range of products from the latest electronics to fashionable clothing, from unique homeware to your favorite books, and much more. We understand that in the busy rhythm of life, convenience and speed matter the most, which is why we offer an easy-to-navigate interface, detailed product information, and a fast, reliable delivery service.<br><br>At BadBeat, we believe in the power of community. Our interactive features allow customers and sellers to connect, share experiences, and build relationships, all while making or facilitating secure, seamless transactions.<br><br>We prioritize your security, ensuring all transactions are protected with top-of-the-line encryption technologies. We are committed to providing you with a safe and secure platform to do business, because at BadBeat, the beat of trust never stops.",
    "Discover a unique and dynamic platform with the Storefront 2-Way Marketplace! Our digital hub bridges the gap between buyers and sellers, providing a vibrant space for commerce in the modern world.<br><br>As a seller, you have the power to showcase your products to a wide, interested audience. Use our advanced tools and features to set up your virtual storefront, track inventory, and manage orders with ease. Whether you're selling handmade crafts, vintage clothes, digital assets, or other unique items, our platform gives you the space and support to grow your business.<br><br>As a buyer, explore a diverse marketplace where you can find exactly what you're looking for. From unique collectibles to everyday essentials, our storefronts offer a wide range of products to suit your needs. Use the intelligent search and filter system to narrow down your options, read detailed product descriptions, and browse through customer reviews for informed purchasing decisions."
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
  }
  
  closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    this.modalOpen = false;
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