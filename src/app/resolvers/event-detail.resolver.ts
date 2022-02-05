import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { IEvento } from '../interfaces/ievento';
import { EventosServiceService } from '../services/eventos-service.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailResolver implements Resolve<IEvento> {
  constructor(private eventosServiceService: EventosServiceService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEvento> {
    const id = +route.params['id'];
    return this.eventosServiceService.getEvento(id).pipe(
      catchError(() => {
        this.router.navigate(['/eventos']);
        return of(null);
      })
    ) as Observable<IEvento>;
  }
}
