import { Component, OnInit, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  isContentLoaded: boolean = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  title = 'darrel-mendoza';

  ngOnInit(): void {

    // setTimeout(() => {
      this.isContentLoaded = true;
    // }, 4500);
    // setTimeout(() => {
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.loadingbar'), 'transition', 'left 3s');
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.loadingbar'), 'left', '0');
    // }, 1500);

    // setTimeout(() => {
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.loadingBox'), 'opacity', '1');
    // }, 500);

    // setTimeout(() => {
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.splashScreen'), 'top', '-100%');
    // }, 4500);

    // setTimeout(() => {
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.loadingCircle'), 'opacity', '0');
    // }, 4500);
  }
  
}
