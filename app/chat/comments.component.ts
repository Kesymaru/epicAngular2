
import {Component, Input} from 'angular2/core';

import {CommentComponent} from './comment.component';
import {SearchPipe} from './search.pipe';
import {CommentModel} from './comment.model';

@Component({
    selector: 'epic-chat-comments',
    pipes: [SearchPipe],
    directives: [
        CommentComponent
    ],
    templateUrl: 'app/chat/comments.component.html'
})

export class CommentsComponent{
    @Input() comments:Array<CommentModel>;
    public search:string = '';

    ngOnInit(){
        console.log('on init comments ->', this.comments);
    }
}
