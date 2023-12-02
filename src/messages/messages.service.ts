import { MessagesRepo } from './messages.repo';

export class MessagesService {
  messagesRepo: MessagesRepo;

  constructor() {
    this.messagesRepo = new MessagesRepo();
  }

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
