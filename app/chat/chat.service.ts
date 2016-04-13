
import {Injectable} from 'angular2/core';

import {CommentModel} from './comment.model';

@Injectable()

export class ChatService{
    comments:Array<CommentModel> = [];

    /**
     * @name add
     * @param {string} comment
     */
    add(comment:CommentModel){
        // add the new comment
        this.comments.push(comment);

        console.log('comments ->', this.comments);
    }
}
