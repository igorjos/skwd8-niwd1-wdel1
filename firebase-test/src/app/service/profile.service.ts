import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { iProfile } from '../interface/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user:BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  constructor(
    private _http:HttpClient
  ) {}

  getProfileData()
  {
    return this._http.get(`${environment.apiUrl}/profile`, {withCredentials: true});
  }

  setProfileData(data:iProfile)
  {
    return this._http.post(`${environment.apiUrl}/profile/`, data, {withCredentials: true});
  }
}
