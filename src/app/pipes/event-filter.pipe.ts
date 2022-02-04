import { Pipe, PipeTransform } from '@angular/core';
import { IEvento } from '../interfaces/ievento';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(eventos: IEvento[], filterBy: string): IEvento[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    console.log(eventos[0].title);
    console.log(filterBy);

    if (filter) {
      return eventos.filter(evento => evento.title.toLocaleLowerCase().includes(filter) || evento.description.toLocaleLowerCase().includes(filter))

    }
    return eventos;
  }

}
