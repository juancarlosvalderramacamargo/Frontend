import {InewBlog} from './../interfaces/InewBlog'


export class NewBlog implements InewBlog {
    
    title: string;
    content: string;   
    
    constructor(title: string, content: string){
    this.title = title;
    this.content = content;
    }  
}