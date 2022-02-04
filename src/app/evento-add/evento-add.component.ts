import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEvento } from '../interfaces/ievento';

@Component({
  selector: 'app-evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {

  newEvento: IEvento = {
    title: '',
    image: '',
    date: new Date(),
    description: '',
    price: 0,
  };
  @Output() crearEvento: EventEmitter<IEvento> = new EventEmitter();

  constructor() { }

  addEvento() {
    this.newEvento.date = new Date(this.newEvento.date);
    this.crearEvento.emit(this.newEvento);
    this.newEvento = {
      title: '',
      image: '',
      date: new Date(),
      description: '',
      price: 0,
    };
  }
  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newEvento.image = reader.result as string;
    });
  }

  ngOnInit(): void {
  }

}
