import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  handleClick() {
    window.open('https://drive.google.com/file/d/1E6MCgOgYuvTSRnpPKUJ5DS8TelxiMD8a/view', '_blank');
    this.downloadFile('https://drive.google.com/uc?export=download&id=1E6MCgOgYuvTSRnpPKUJ5DS8TelxiMD8a');
  }

  downloadFile(url: string) {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'file.pdf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
