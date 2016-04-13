
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'epic-chat-comment',
    templateUrl: 'app/chat/comment.component.html'
})

export class CommentComponent{
    @Input() comment;

    ngOnInit(){
        console.log('init ->', this.comment);
    }
}