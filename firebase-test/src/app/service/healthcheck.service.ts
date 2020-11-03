import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthcheckService {

  constructor(
    private _http:HttpClient
  ) { }

  check()
  {
    return this._http.get(`${environment.apiUrl}/healthcheck`, {withCredentials: true});
  }
}
