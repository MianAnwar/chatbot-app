import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatRequest {
  prompt: string;
}

export interface ChatResponse {
  prompt: string;
  output: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://127.0.0.1:8000/generate';

  constructor(private http: HttpClient) {}

  sendMessage(prompt: string): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.apiUrl, { prompt });
  }
}
