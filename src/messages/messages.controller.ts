import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    // messagesService: MessagesService

    constructor(
        public messagesService: MessagesService,
        public messagesService2: MessagesService,
        public messagesService3: MessagesService
    ) {
        console.log(messagesService === messagesService2);
        console.log(messagesService === messagesService3);
        // DONT DO THIS REAL APP
        // USE DEPEDENCY INJECTION
        // this.messagesService = new MessagesService()
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll()
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    async getMessages(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id)

        if (!message) {
            throw new NotFoundException('message not found')
        }

        return message
    }
}
