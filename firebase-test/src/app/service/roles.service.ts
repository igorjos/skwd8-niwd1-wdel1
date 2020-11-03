import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private _http:HttpClient
  ) { }

  getAllRoles()
  {
    return this._http.get(`${environment.apiUrl}/roles`, {withCredentials: true});
  }

  addNewRole(data:any)
  {
    return this._http.post(`${environment.apiUrl}/roles`, data, {withCredentials: true})
  }
}
