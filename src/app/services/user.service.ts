import { Injectable } from '@angular/core';
import { Ilogin, } from '../interfaces/Ilogin'
import {HttpClient} from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  }
  )
export class userService{
    AUTH_SERVER: string = 'http://localhost:3050/API';
    authSubject = new BehaviorSubject(false);
    private token: string ='token';
    
    constructor( private http : HttpClient) {}

    // login(user: Ilogin):Observable<Ilogin>{
    //     console.log('serve')
    //     return this.http.post<Ilogin>(`${this.AUTH_SERVER}/sigin`,
    //     user).pipe(tap(
    //         (res: Ilogin)=>{
    //             if(res){
    //                 //todo}
    //         }
    //     })
    //     );
    // }
    login(user:any){
        let res = this.http.get(`${this.AUTH_SERVER}/users`,user).subscribe( respo => {    
            console.log(respo);    
        });
        console.log(res);
        return res;
    }
    logout(): void{
        this.token ='';
        localStorage.removeItem("ACCES_TOKEN");
        localStorage.removeItem("EXPIRES_IN");         
    }

    private saveToken(token: string, expiresIn:string ): void
    {
        localStorage.setItem("ACCES_TOKEN",token);
        localStorage.setItem("EXPIRES_IN",expiresIn); 
        this.token = token;
    }

    private getToken(): string{
        if(!this.token)
        {
            //this.token = localStorage.getItem("ACCES_TOKEN");
        }
        return this.token;
    }
}

    