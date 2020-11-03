import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private _http:HttpClient
  ) { }

  getFolderFiles(path:string)
  {
    return this._http.get(`${environment.apiUrl}/fs/dir/?path=${path}`, {withCredentials: true});
  }

  createNewDir(data)
  {
    return this._http.post(`${environment.apiUrl}/fs/dir`, data, {withCredentials: true})
  }

  loadFileContents(filePath:string)
  {
    return this._http.get(`${environment.apiUrl}/fs/file?path=${filePath}`, {withCredentials: true})
  }
}
