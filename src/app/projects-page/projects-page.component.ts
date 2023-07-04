import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  modalOpen: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {  
    // Add global event listener on initialization
    this.renderer.listen('window', 'click',(event:Event)=>{this.onClickOutsideModal(event)});
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
