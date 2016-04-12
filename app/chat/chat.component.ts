
import {Component} from 'angular2/core';

import {ChatService} from './chat.service';
import {CommentsComponent} from './comments.component';

@Component({
    selector: 'epic-chat',
    directives: [
        CommentsComponent
    ],
    templateUrl: 'app/chat/chat.component.html'
})

export class ChatComponent{
    public ChatService:ChatService;

    constructor(ChatService:ChatService){
        this.ChatService = ChatService;
        console.log('ChatService', this.ChatService);
    }
}