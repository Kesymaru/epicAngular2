
import {Component, Input} from 'angular2/core';

import {CommentComponent} from './comment.component';
import {ChatService} from './chat.service';

@Component({
    selector: 'epic-chat-comments',
    directives: [
        CommentComponent
    ],
    templateUrl: 'app/chat/comments.component.html'
})

export class CommentsComponent{

    constructor(public ChatService:ChatService){
        console.log('ChatService ->', this.ChatService);
    }
}
