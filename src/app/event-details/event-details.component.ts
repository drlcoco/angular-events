import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvento } from '../interfaces/ievento';
import { EventosServiceService } from '../services/eventos-service.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  eventoDetails: IEvento = {
    id: 0,
    title: '',
    image: '',
    date: "",
    description: "",
    price: 0,
  }
  constructor(private eventosServiceService: EventosServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"] as number; // Recibimos parámetro
    this.eventosServiceService.getEvento(id)
      .subscribe(
        p => this.eventoDetails = p,
        error => console.error(error)
      );
  }

}
