import { readFile, writeFile } from 'fs/promises';
import { messageBodyDto } from '../messages/dtos/createMessage.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepo {
  async findAllMessages() {
    let messages = await readFile('messages.json', 'utf8');
    messages = JSON.parse(messages);
    return messages;
  }

  async findMessagebyId(id: string) {
    let messages = await readFile('messages.json', 'utf8');
    let content = JSON.parse(messages);
    console.log(content);
    console.log(id);
    return content[id];
  }

  async createMessage(message: string) {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);
    let id = Math.floor(Math.random() * 999);
    messages[id] = { id, content: message };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
