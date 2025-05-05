import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enlace, StrapiResponse } from '../interfaces/nav/enlaces';

@Injectable({
  providedIn: 'root'
})
export class MenuNavegacionService {

  private apiUrl = 'http://localhost:1337/api/enlaces-navegadores';

  constructor(private http: HttpClient) { }

  getMenuNavegacion(): Observable<StrapiResponse<Enlace>> {
    return this.http.get<StrapiResponse<Enlace>>(this.apiUrl);
  }
}
