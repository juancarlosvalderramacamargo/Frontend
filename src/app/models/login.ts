import {Ilogin} from './../interfaces/Ilogin'


export class Login implements Ilogin {
    
    email: string;
    password: string;   
    
    constructor(email: string, password: string){
    this.email = email;
    this.password = password;
    }  
}