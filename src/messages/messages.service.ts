import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";


@Injectable()
export class MessagesService {
    messageRepo: MessagesRepository

    // automatic assign
    constructor(messageRepo: MessagesRepository) {
        // Service is creating its own depedencies
        // DONT DO THIS ON REAL APPS
        this.messageRepo = messageRepo
    }

    findOne(id: string) {
        return this.messageRepo.findOne(id)
    }

    findAll() {
        return this.messageRepo.findAll()
    }

    create(content: string) {
        return this.messageRepo.create(content)
    }
}