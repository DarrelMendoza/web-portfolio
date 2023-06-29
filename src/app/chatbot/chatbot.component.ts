import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})


export class ChatbotComponent {
  showChatBox: boolean = false;

  constructor() {}

  toggleChatBox(): void {
    this.showChatBox = !this.showChatBox;
  }
}
