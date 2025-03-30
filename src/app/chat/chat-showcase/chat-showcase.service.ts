import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatShowcaseService {

  private apiUrl = 'URL_DEL_BACKEND';

  constructor(private http: HttpClient) {}

  loadMessages() {
  return [
      { text: 'Hola, ¿cómo puedo ayudarte?', date: new Date(), reply: true },
      { text: '¡Hola! ¿Tienes alguna pregunta?', date: new Date(), reply: false },
    ];
  }

  reply(message: string) {
    return this.http.post<any>(this.apiUrl, { message });
  }
}
