import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { EventosServiceService } from './services/eventos-service.service';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SaveChangesGuardGuard } from './guards/save-changes-guard.guard';

const APP_ROUTES: Route[] = [
  { path: 'eventos',component: EventosShowComponent },
  { path: 'evento/add', canDeactivate: [SaveChangesGuardGuard], component: EventoAddComponent },
  { path: 'evento/:id'/* , canActivate: []  */,component: EventDetailsComponent },
  /* { path: '**', redirectTo: 'eventos', pathMatch: 'full' }, */
]

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventFilterPipe,
    EventoItemComponent,
    EventoAddComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [/*  */
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true,
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
