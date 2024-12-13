import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify',
})
export class SlugifyPipe implements PipeTransform {
  transform = (value: string): string =>
    !value
      ? ''
      : value
          .toLowerCase()
          .normalize('NFD') // Normaliza caracteres como acentos
          .replace(/[\u0300-\u036f]/g, '') // Elimina marcas diacríticas
          .replace(/\s+/g, '-') // Reemplaza espacios por "-"
          .replace(/[^a-z0-9-]/g, ''); // Elimina caracteres no alfanuméricos;
}
