import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public createAccount(useObj:any){
    return new Promise((resolve, reject)=>{
      this.http.post("http://localhost:3000/users", useObj).subscribe({
        next: (res:any) => { resolve(res); },
        error: (err:Error) => { reject(err) },
        complete: () => { console.log('Completed')}
      });
    });
  }

  public login(useObj:any){
    return new Promise((resolve, reject)=>{
      this.http.post("http://localhost:3000/users/login", useObj).subscribe({
        next: (res:any) => { resolve(res); },
        error: (err:Error) => { reject(err) },
        complete: () => { console.log('Completed')}
      });
    });
  }
}
