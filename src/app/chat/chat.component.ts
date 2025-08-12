import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppMarkdownComponent } from './markdown/markdown.component';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  imports: [NgClass, FormsModule, AppMarkdownComponent]
})
export class ChatComponent {
  messages: Message[] = [];
  userInput = '';
  loading = false;

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    const userMessage: Message = { role: 'user', content: this.userInput };
    this.messages.push(userMessage);

    this.loading = true;
    this.chatService.sendMessage(this.userInput).subscribe({
      next: (res) => {
        this.messages.push({ role: 'bot', content: res.output });
        this.loading = false;
      },
      error: () => {
        this.messages.push({ role: 'bot', content: 'Error connecting to server.' });
        this.loading = false;
      }
    });

    this.userInput = '';
  }
}
