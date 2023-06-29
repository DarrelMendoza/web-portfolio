import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor() { }

  sendMessage(message: string) {
    return axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', 
    {
      prompt: message,
      max_tokens: 60
    },
    {
      headers: {
        'Authorization': `Bearer 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`,
        'Content-Type': 'application/json'
      }
    });
  }
}
