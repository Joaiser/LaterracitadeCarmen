import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlatoMenu } from '../interfaces/plato-menu.iterface';

@Injectable({
  providedIn: 'root'
})
export class PlatosMenuService {
  private apiUrl = 'http://localhost:1337/api/platoes?populate=*';

  constructor(private httpClient: HttpClient) { }


  getPlatosMenu(): Observable<{ data: PlatoMenu[] }> {
    return this.httpClient.get<{ data: PlatoMenu[] }>(this.apiUrl)
  }
}
