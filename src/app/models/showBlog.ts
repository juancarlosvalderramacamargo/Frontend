import {IshowBlog} from './../interfaces/IshowBlog'


export class ShowBlog implements IshowBlog {
    
    title: string;
    content: string;   
    dateCreated : Date;
    userCreated : string;

    constructor(title: string,
        content: string,
        dateCreated : Date,
        userCreated : string,){
        this.title = title;
        this.content = content;
        this.userCreated = userCreated;
        this.dateCreated = dateCreated
    }  
}