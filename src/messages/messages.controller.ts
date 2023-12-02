import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { messageBodyDto } from './dtos/createMessage.dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

  @Get()
  getMessages() {
    return this.messagesService.findAllMessages();
  }

  @Get('/:id')
  getMessageByID(@Param('id') id: string) {
    return this.messagesService.findMessageById(id);
  }

  @Post()
  createMessage(@Body() body: messageBodyDto) {
    return this.messagesService.createMessage(body.content);
  }
}
