import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {

  constructor() { }

  showSplash = true;
  loadingBarLeft = '-100%';
  loadingCircleOpacity = 1;

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.loadingBarLeft = '0';
    //   this.loadingCircleOpacity = 0;
    // }, 1500);

    // setTimeout(() => {
    //   this.showSplash = false;
    //   document.body.classList.add('visibleSplash');
    // }, 4500);
  }

}
