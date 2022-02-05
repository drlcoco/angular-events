import { Injectable } from '@angular/core';
import { IEvento } from '../interfaces/ievento';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';
import { Responses } from '../interfaces/responses';


@Injectable({
  providedIn: 'root'
})
export class EventosServiceService {

  eventos : IEvento[] = [];
  private eventoURL = 'eventos';
  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;

  constructor(private http: HttpClient) {
    
  }

  getEventos(): Observable<IEvento[]> {
    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') as string)
    };
    return this.http.get<{eventos : IEvento[]}>(this.eventoURL, options).pipe(
      retry(3),
      map(response => response.eventos)
    );
  }

  getEvento(id:number): Observable<IEvento> {
    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') as string)
    };
    return this.http.get<{evento : IEvento}>(`${this.eventoURL}/${id}`, options).pipe(
      retry(3),
      map(response => response.evento)
    );
  }

  crearEvento(evento: IEvento): Observable<IEvento> {
    /* return this.http.post<Responses>(`/evento`, evento).pipe(map(resp => resp.evento)); */
    return this.http.post<Responses>(this.eventoURL, evento).pipe(
			map(resp => {
				return resp.evento;
			})
		);
  }
}
