import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvento } from '../interfaces/ievento';

@Component({
  selector: 'app-evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent implements OnInit {

  @Input() inputEvento: IEvento = {
    title:'',
    image:'',
    date: new Date(),
    description: '',
    price: 0
  };
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  imgHeight:number = 200;

  constructor() { }

  deleteEvento(){
    this.deleteEvent.emit(this.inputEvento);
  }

  ngOnInit(): void {
  }

}
