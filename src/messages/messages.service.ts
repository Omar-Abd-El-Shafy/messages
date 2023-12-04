import { MessagesRepo } from './messages.repo';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepo) {}

  findAllMessages() {
    return this.messagesRepo.findAllMessages();
  }

  findMessageById(id: string) {
    return this.messagesRepo.findMessagebyId(id);
  }

  createMessage(content: string) {
    return this.messagesRepo.createMessage(content);
  }
}
