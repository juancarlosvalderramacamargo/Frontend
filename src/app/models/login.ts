import {Ilogin} from './../interfaces/Ilogin'


export class Login implements Ilogin {
    
    EMAIL: string;
    PASSWORD: string;   
    
    constructor(EMAIL: string, PASSWORD: string){
    this.EMAIL = EMAIL;
    this.PASSWORD = PASSWORD;
    }  
}