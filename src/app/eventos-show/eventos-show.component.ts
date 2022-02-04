import { Component, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/ievento';
import { EventosServiceService } from '../services/eventos-service.service';

@Component({
  selector: 'app-eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css'],
})
export class EventosShowComponent implements OnInit {
  eventos: IEvento[] = [/* 
    { SE COGEN LOS EVENTOS INICIALES DESDE EVENTOS-SERVICE.
      
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
    }, */
  ];
  
  filterSearch: string = '';
  EventosServiceService: any;

  //Evento vacío para comprobar el if else. Si está vacío muestra -No hay eventos disponibles-
  //eventos:IEvento[] = [];

  constructor(private eventosServiceService : EventosServiceService) {}
  
  
  ordenarFecha(){
    this.filterSearch = "";
    this.eventos.sort((a,b)=>{
      return a.date.getTime() - b.date.getTime();
    })
  }
  ordenarPrecio(){
    this.filterSearch = "";
    this.eventos.sort((a,b)=>{
      return a.price - b.price;
    })
  }
  deleteEvent(evento: IEvento){
    this.eventos = this.eventos.filter((e)=> evento.title.toLocaleLowerCase()!=e.title.toLocaleLowerCase());
  }
  crearEvento(evento:IEvento){
    this.eventos.push(evento);
  }

  ngOnInit(): void {
    /* this.EventosServiceService.getEventos().subscribe(
      (      event: IEvento[]) => this.eventos = event,
      (      error: any) => console.error(error),
      () => console.log('Events loaded')
    ); */
    this.eventosServiceService.getEventos().subscribe(eventos => this.eventos = eventos);
  }
}
