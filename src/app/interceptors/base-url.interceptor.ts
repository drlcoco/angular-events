import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    const token: any= localStorage.getItem('token');
    if(token){
      const authReq:HttpRequest<any> = req.clone({headers:req.headers.set('Authorization', token)});
      return next.handle(authReq);
    }
    return next.handle(req);
  }

  /* intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  } */
  /* intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    const token: any= localStorage.getItem('token');
    if(token){
      const authReq:HttpRequest<any> = req.clone({headers:req.headers.set('Authorization', token)});
      return next.handle(authReq);
    }
    return next.handle(req);
  } */
  /* intercept(
    req:HttpRequest<any>,
    next:HttpHandler
  ): Observable<HttpEvent<any>> {
    const reqClone = req.clone({
      url:`${environment.baseUrl}/${req.url}`
    });
    return next.handle(reqClone);
  } */
}
