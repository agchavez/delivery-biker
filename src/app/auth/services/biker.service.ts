
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { tap, catchError, map } from 'rxjs/operators';
import { Biker, RegisterBiker } from '../interface/interfaces';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'asdad5'
  })
};

@Injectable({
    providedIn: 'root'
  })
  export class BikersService {
    private baseUrl:string = environment.baseUrl;
    constructor(private httpClient:HttpClient){

    }

    getBiker(){
    // const url = `${this.baseUrl}/biker/all/?limit=4&offset=0`;
    // console.log('hola')


    // this.httpClient.get('https://pidelow-backend-8zkq7.ondigitalocean.app/api/biker/all/?limit=4&offset=0',{}).subscribe(res=>
    //   console.log(res)
    //   )
    }

    registerBiker(email:string,firstName:string,lastName:string,phone:string,password:string, identity:string){
    const url = `${this.baseUrl}/biker/register`;

      const persona = {
        email:email,
      firstName:firstName,
      lastName:lastName,
      phone:phone,
      password:password,
      identity: identity
      }

      return this.httpClient.post<RegisterBiker>(url,persona).pipe(tap(resp=>{
        console.log(resp.msj)

      }),
      map( resp => {
        localStorage.setItem('email-verfied', email);
        return {ok :resp.msj
        }}),
      catchError(err =>{
        const temp:any  = err.error;
          return of({ok:false})
      }))

  }


  }
