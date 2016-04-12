
/**
 * @name CommentModel
 * @description
 * Comment model
 */
export class CommentModel{
    message:string;
    user:string;
    date:string;

    constructor(message:string, user:string){
        this.message = message;
        this.user = user;
        this.date = new Date();
    }
}