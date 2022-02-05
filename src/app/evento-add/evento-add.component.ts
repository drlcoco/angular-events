import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComponentDeactivate } from '../guards/save-changes-guard.guard';
import { IEvento } from '../interfaces/ievento';

@Component({
  selector: 'app-evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit, ComponentDeactivate {

  newEvento: IEvento = {
    title: '',
    image: '',
    date: "",
    description: '',
    price: 0,
  };
  @Output() crearEvento: EventEmitter<IEvento> = new EventEmitter();

  constructor() { }

  addEvento() {
    this.newEvento.date = this.newEvento.date;
    this.crearEvento.emit(this.newEvento);
    this.newEvento = {
      title: '',
      image: '',
      date: "",
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
  
  canDeactivate() {
    return confirm("¿Quieres abandonar la página?. Los cambios no se guardarán");
  }
  
  ngOnInit(): void {
  }

}
