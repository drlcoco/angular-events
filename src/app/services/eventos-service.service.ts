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
  private eventoURL = 'http://localhost:8080/phpmyadmin/index.php?route=/sql&server=1&db=semana4&table=evento';
  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;

  constructor(private http: HttpClient) {
    this.eventos.push(
      {
        title: 'Estopa',
        image: '/assets/i5.png',
        date: new Date('2022-08-22'),
        description:
          'Gran concierto proximamente del conocido grupo Estopa, no te lo pierdas.',
        price: 12,
      },
      {
        title: 'Antonio Orozco',
        image: '/assets/i6.png',
        date: new Date('2022-01-28'),
        description:
          'Gran concierto proximamente de Antonio Orozco, no te lo pierdas.',
        price: 29,
      });
  }

  getEventos() : Observable<IEvento[]> {
    /* return this.http.get<Responses>('evento').pipe(map(resp => resp.eventos)); */
    /* return this.http.get<IEvento[]>(this.eventoURL, { headers: this.headers }); */

    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') as string)
    };
    return this.http.get<{eventos : IEvento[]}>(this.eventoURL, options).pipe(
      retry(3),
      map(response => response.eventos)
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
