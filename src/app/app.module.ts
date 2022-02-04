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

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventFilterPipe,
    EventoItemComponent,
    EventoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [/* EventosServiceService,  *//* BaseUrlInterceptor,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true,
  } */],
  bootstrap: [AppComponent]
})
export class AppModule { }
