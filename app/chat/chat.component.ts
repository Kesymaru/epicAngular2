
import {Component} from 'angular2/core';

import {ChatService} from './chat.service';
import {CommentModel} from './comment.model';
import {CommentsComponent} from './comments.component';

@Component({
    selector: 'epic-chat',
    directives: [
        CommentsComponent
    ],
    templateUrl: 'app/chat/chat.component.html'
})

export class ChatComponent{
    public comment:CommentModel = new CommentModel('');

    constructor(public ChatService:ChatService){
    }

    onSubmit(){
        console.log('submit ->', this.comment);

        this.ChatService.add(this.comment);
        this.comment = new CommentModel('');
    }
}