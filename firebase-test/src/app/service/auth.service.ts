import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http:HttpClient
  ) { }

  register({email, password})
  {
    return this._http.post(`${environment.apiUrl}/auth/register`, {email: email, password:password}, {withCredentials: true});
  }

  login({email, password})
  {
    return this._http.post(`${environment.apiUrl}/auth/login`, {email: email, password:password}, {withCredentials: true});
  }
}
