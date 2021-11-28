import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, map, tap} from "rxjs/operators";
import { of } from "rxjs";
import { LoginResponse, Biker } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string = environment.baseUrl;
  private _biker!: Biker;


  get client(){
    return {...this._biker}
  }

  constructor(
    private http:HttpClient
  ) { }

  login(email:string, password:string){
    const url = `${this.baseUrl}/biker/login`;
    const body = {email,password}

    return this.http.post<LoginResponse>(url,body)
              .pipe(
                tap( resp => {

                  if (resp.ok) {
                    localStorage.setItem('token', resp.token!);
                  }
                }),
                map( resp => {
                  localStorage.removeItem('email-verfied');
                  return {ok :resp.ok, verified: true
                  }}),
                catchError( err => {

                  const temp:any  = err.error;
                  console.log(temp);

                  if (temp.verified === false) {
                      localStorage.setItem('email-verfied', email);
                      return of({
                        ok: false,
                        verified: false
                      });

                    }else if(temp.aproved === false){
                      return of({ok: false, verified: true, aproved:false})
                    }else if(temp.verified === true){
                      return of({ok: false, verified: true})
                    }

                    return of({ok: false, verified: undefined})}
                  )
              );
  }

  ///biker/validate

  validateToken ():Observable<boolean>{
    const url = `${this.baseUrl}/biker/validate`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '')
    return this.http.get<LoginResponse>(url, { headers })
          .pipe(
            map(resp =>{
              if (resp.ok) {
                localStorage.setItem('token', resp.token!);
                this._biker = resp.biker!;

              }
               return resp.ok
            }),
            catchError(err => of(false))

          )
  }
  validateEmail(){
    const email = localStorage.getItem('email-verfied');
    if(email){
      return true;
    }else{
      return false;
    }
  }

  //TODO:Verificar codigo de verificacion del usuario
  verifiedCode(code:number){
    const email = localStorage.getItem('email-verfied');
    const url = `${this.baseUrl}/biker/check`
    const body = {
      code, email
    }
    return this.http.put<LoginResponse>(url, body)
      .pipe(
        map(  resp => {
          if (resp.ok) {
            localStorage.removeItem('email-verfied');
          }
          return {ok:true, msj:resp.msj}
        }
        ),
        catchError(err => of({ok: err.error.ok ,msj: err.error.msj }))
      )
    ;


  }


}
