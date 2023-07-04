import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  modalOpen: boolean = false;
  // We set the first image as the currentImage by default
  currentImage: string = './assets/sample.jpg';
  // We create an array of the image sources
  images: string[] = ['./assets/sample.jpg', './assets/sample2.jpg', './assets/sample3.jpg', './assets/sample3.jpg','./assets/sample3.jpg'];

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {  
    // Add global event listener on initialization
    this.renderer.listen('window', 'click',(event:Event)=>{this.onClickOutsideModal(event)});
  }

  // The changeImage function updates the currentImage based on the clicked image
  changeImage(index: number): void {
    this.currentImage = this.images[index];
  }

  openModal(): void {
    // Get the modal element
    const modal = document.getElementById('myModal');

    // Show the modal
    modal.style.display = 'block';
    this.modalOpen = true;
  }

  closeModal(): void {
    // Get the modal element
    const modal = document.getElementById('myModal');

    // Hide the modal
    modal.style.display = 'none';
    this.modalOpen = false;
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
