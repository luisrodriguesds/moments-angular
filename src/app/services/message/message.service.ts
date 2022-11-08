import { Injectable } from '@angular/core';

interface IAdd {
  messageTitle?: string;
  messageDescription: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messageTitle: string = '';
  messageDescription: string = '';
  constructor() {}

  add({ messageTitle, messageDescription }: IAdd) {
    this.messageTitle = messageTitle || '';
    this.messageDescription = messageDescription;

    setTimeout(() => {
      this.clear();
    }, 4000);
  }

  clear() {
    this.messageTitle = '';
    this.messageDescription = '';
  }
}
