import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatList', { read: ElementRef, static: true }) chatList: ElementRef;

  showChatBox: boolean = false;
  messages: Array<{text: string, sender: string}> = [];
  botTyping: boolean = false;

  constructor() {}

// Your existing Angular code goes here

ngOnInit() {
  this.addMessage("Hi there. How can I help you today?", "bot");

  // Show the chat bubble 10 seconds after the page loads
  setTimeout(() => {
    document.getElementById('chatBubble').style.opacity = '1';

    // Make the button bounce while the chat bubble is displayed
    document.getElementById('chatbotButton').style.animation = 'bounce 1s infinite';

    // Hide the chat bubble and stop the button from bouncing after the bubble's been displayed for 10 seconds
    setTimeout(() => {
      document.getElementById('chatBubble').style.opacity = '0';
      document.getElementById('chatbotButton').style.animation = 'none';
    }, 10000); // 10000 milliseconds = 10 seconds
  }, 1000); // 1000 milliseconds = 1 second
}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      const lastMessageElement = this.chatList.nativeElement.lastElementChild;
      if (lastMessageElement) {
        lastMessageElement.scrollIntoView({ behavior: "smooth" });
      }
    } catch(err) { }
  }
  

  toggleChatBox(): void {
    this.showChatBox = !this.showChatBox;
    document.getElementById('chatBubble').style.opacity = '0';
    document.getElementById('chatbotButton').style.animation = 'none';
  }

  addMessage(text: string, sender: string) {
    this.messages.push({text, sender});
  }

  sendUserMessage(textarea: HTMLTextAreaElement): void {
    const text = textarea.value.trim();
    if (text !== '') {
      this.addMessage(text, 'user');
      textarea.value = '';
      // Make the bot seem like it's typing.
      this.botTyping = true;
      setTimeout(() => {
        // After a delay, stop the typing animation and send the bot's message.
        this.botTyping = false;
        this.addMessage(this.generateResponse(text), 'bot');
      }, 1000); // 2000 milliseconds = 2 seconds
    }
  }

  generateResponse(userInput: string): string {
    // This is a very simple implementation of a response.
    // You might want to replace it with a call to a more sophisticated method (e.g., OpenAI's GPT-3 model).
    return `You said: "${userInput}"`;
  }
}
