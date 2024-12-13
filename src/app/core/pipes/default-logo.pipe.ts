import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultLogo',
})
export class DefaultLogoPipe implements PipeTransform {
  transform(
    imageUrl: string,
    defaultImage: string = './default.png'
  ): string {
    if (!imageUrl) {
      return defaultImage;
    }

    const img = new Image();
    img.src = imageUrl;

    // Verifica si la imagen carga correctamente
    img.onerror = () => (img.src = defaultImage);

    return imageUrl;
  }
}
