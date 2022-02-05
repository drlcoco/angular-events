import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventoAddComponent } from '../evento-add/evento-add.component';

export interface ComponentDeactivate {
  canDeactivate: () => boolean | UrlTree | Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree>;
}

@Injectable({
  providedIn: 'root'
})

export class SaveChangesGuardGuard implements CanDeactivate<EventoAddComponent> {
  canDeactivate(
    component: EventoAddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean |
  UrlTree>  {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
  
}
