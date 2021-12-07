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


  get biker(){

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
                  console.log(resp);

                  localStorage.removeItem('email-verfied');
                  return {ok :resp.ok, verified: true
                  }}),
                catchError( err => {

                  const temp:any  = err.error;

                  if (temp.verified === false) {
                      localStorage.setItem('email-verfied', email);
                      return of({
                        ok: false,
                        verified: false
                      });

                    }else if(temp.verified && temp.aproved === null){
                      localStorage.setItem('email-verfied', email);
                      return of({ok: false, verified: true, aproved:null})
                    }else if(temp.verified){
                      localStorage.setItem('email-verfied', email);
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
                console.log(resp);

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

  //Subir images del usuario
  uploadImage(imgCard:File,imgLicense:File){
    const url = `${this.baseUrl}/biker/info`;
    const formData = new FormData();
    formData.append('imgCard',imgCard);
    formData.append('imgLicense',imgLicense);
    formData.append('email',localStorage.getItem('email-verfied') || "");

    return this.http.put(url, formData, )
  }

  //Validar si la cuenta ha sido aprovada
  isAproved():Observable<LoginResponse>{
    const email = localStorage.getItem('email-verfied') || "";
    const url = `${this.baseUrl}/biker/isAproved`;
    const body = {email}
    return this.http.post<LoginResponse>(url, body)
  }


}
